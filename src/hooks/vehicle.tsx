import React, { createContext, useContext, useState, useCallback } from 'react';

import { api } from '../services/api';

interface IVehicle {
  id: string;
  name: string;
  license_plate: string;
}

interface IAddVehicleDTO {
  user_token: string;
  vehicle: {
    name: string;
    license_plate: string;
  };
}

interface IVehicleContext {
  vehicles: IVehicle[];
  isLoading: boolean;
  loadVehicles(user_token: string): Promise<void>;
  addVehicle(data: IAddVehicleDTO): Promise<void>;
}

const VehicleContext = createContext<IVehicleContext>({} as IVehicleContext);

const VehicleProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IVehicle[]>([] as IVehicle[]);
  const [isLoading, setIsLoading] = useState(true);

  const loadVehicles = useCallback(async (user_token: string) => {
    const response = await api.get('/vehicles', {
      headers: { Authorization: `Bearer ${user_token}` },
    });

    setData(response.data);

    setIsLoading(false);
  }, []);

  const addVehicle = useCallback(
    async ({ user_token, vehicle }: IAddVehicleDTO) => {
      const response = await api.post(
        '/vehicles/add',
        { name: vehicle.name, license_plate: vehicle.license_plate },
        { headers: { Authorization: `Bearer ${user_token}` } },
      );

      setData([...data, response.data]);
    },
    [data],
  );

  return (
    <VehicleContext.Provider
      value={{ vehicles: data, isLoading, loadVehicles, addVehicle }}
    >
      {children}
    </VehicleContext.Provider>
  );
};

function useVehicle(): IVehicleContext {
  const context = useContext(VehicleContext);

  if (!context) {
    throw new Error('useVehicle hook must be used within vehicleProvider');
  }

  return context;
}

export { VehicleProvider, useVehicle };
