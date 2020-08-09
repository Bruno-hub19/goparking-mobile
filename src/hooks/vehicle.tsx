import React, { createContext, useContext, useState, useCallback } from 'react';

import { api } from '../services/api';

interface IVehicle {
  id: string;
  name: string;
  license_plate: string;
}

interface IAddVehicleDTO {
  user_token: string;
  vehicle: Omit<IVehicle, 'id'>;
}

interface IRemoveVehicleDTO {
  user_token: string;
  vehicle_id: string;
}

interface IVehicleContext {
  vehicles: IVehicle[];
  isLoading: boolean;
  loadVehicles(user_token: string): Promise<void>;
  addVehicle(data: IAddVehicleDTO): Promise<void>;
  removeVehicle(data: IRemoveVehicleDTO): Promise<void>;
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

  const removeVehicle = useCallback(
    async ({ user_token, vehicle_id }: IRemoveVehicleDTO) => {
      await api.delete(`/vehicles/delete/${vehicle_id}`, {
        headers: { Authorization: `Bearer ${user_token}` },
      });

      setData(oldState => {
        const vehicleIndex = oldState.findIndex(
          vehicle => vehicle.id === vehicle_id,
        );

        oldState.splice(vehicleIndex, 1);

        const newState = oldState.map(vehicle => vehicle);

        return newState;
      });
    },
    [],
  );

  return (
    <VehicleContext.Provider
      value={{
        vehicles: data,
        isLoading,
        loadVehicles,
        addVehicle,
        removeVehicle,
      }}
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
