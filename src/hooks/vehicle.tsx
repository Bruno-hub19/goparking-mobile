import React, { createContext, useContext, useState, useCallback } from 'react';

import { api } from '../services/api';

interface IVehicleState {
  id: string;
  name: string;
  license_plate: string;
  selected: boolean;
}

interface IVehicleContext {
  vehicles: IVehicleState[];
  loadVehicles(user_token: string): Promise<void>;
  setVehicleToPark(vehicle_id: string): void;
}

const VehicleContext = createContext<IVehicleContext>({} as IVehicleContext);

const VehicleProvider: React.FC = ({ children }) => {
  const [vehicles, setVehicles] = useState<IVehicleState[]>([]);

  const loadVehicles = useCallback(async (user_token: string) => {
    const response = await api.get('/vehicles', {
      headers: { Authorization: `Bearer ${user_token}` },
    });

    setVehicles(response.data);
  }, []);

  const setVehicleToPark = useCallback((vehicle_id: string) => {
    setVehicles(oldState => {
      const allVehicles = oldState.map(eachVehicle => {
        return {
          id: eachVehicle.id,
          name: eachVehicle.name,
          license_plate: eachVehicle.license_plate,
          selected: false,
        };
      });

      const findVehicle = allVehicles.find(
        eachVehicle => eachVehicle.id === vehicle_id,
      );

      if (findVehicle) {
        findVehicle.selected = true;
      }

      return allVehicles;
    });
  }, []);

  return (
    <VehicleContext.Provider
      value={{ vehicles, loadVehicles, setVehicleToPark }}
    >
      {children}
    </VehicleContext.Provider>
  );
};

function useVehicle(): IVehicleContext {
  const context = useContext(VehicleContext);

  if (!context) {
    throw new Error('useVehicle hook must be used within a vehicle provider');
  }

  return context;
}

export { VehicleProvider, useVehicle };
