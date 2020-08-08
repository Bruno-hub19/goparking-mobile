import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import { useAuth } from '../../hooks/auth';

import { Container, VehicleCard, VehicleLicensePlate } from './styles';

interface IVehiclesState {
  license_plate: string;
  owner_id: string;
}

const Vehicles: React.FC = () => {
  const [userVehicles, setUserVehicles] = useState<IVehiclesState[]>([]);

  const { user } = useAuth();

  useEffect(() => {
    setUserVehicles(user.vehicles);
  }, [user.vehicles]);

  return (
    <Container>
      <FlatList
        data={userVehicles}
        keyExtractor={item => item.license_plate}
        style={{ width: '100%' }}
        renderItem={({ item: vehicle }) => (
          <VehicleCard>
            <VehicleLicensePlate>{vehicle.license_plate}</VehicleLicensePlate>
          </VehicleCard>
        )}
      />
    </Container>
  );
};

export { Vehicles };
