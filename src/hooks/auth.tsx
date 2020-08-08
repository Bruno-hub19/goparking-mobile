import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import { api } from '../services/api';

interface ICredentials {
  email: string;
  password: string;
}

interface IVehicles {
  license_plate: string;
  owner_id: string;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  vehicles: IVehicles[];
}

interface IAuthContext {
  user: IUser;
  token: string;
  loading: boolean;
  signIn(credentials: ICredentials): Promise<void>;
  signOut(): void;
}

interface IAuthState {
  user: IUser;
  token: string;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>({} as IAuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@GoParking:token',
        '@GoParking:user',
      ]);

      if (token[1] && user[1]) {
        setData({ token: token[1], user: JSON.parse(user[1]) });
      }

      setLoading(false);
    }

    loadStoragedData();
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', { email, password });

    const { token, user } = response.data;

    await AsyncStorage.multiSet([
      ['@GoParking:token', token],
      ['@GoParking:user', JSON.stringify(user)],
    ]);

    setData({ token, user });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@GoParking:token', '@GoParking:user']);

    setData({} as IAuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, token: data.token, loading, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContext {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth hook must be used within authProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
