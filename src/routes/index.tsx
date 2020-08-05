import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { useAuth } from '../hooks/auth';

import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

const Routes: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#1f1f1f',
        }}
      >
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return user ? <AppRoutes /> : <AuthRoutes />;
};

export { Routes };
