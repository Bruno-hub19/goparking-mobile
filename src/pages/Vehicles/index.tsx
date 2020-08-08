import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, Image } from 'react-native';

import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';
import Button from '../../components/Button';
import carIcon from '../../assets/car-avatar.png';

import {
  Container,
  VehicleCard,
  VehicleAvatarContainer,
  VehicleContent,
  VehicleName,
  VehicleLicensePlate,
} from './styles';

interface IVehiclesState {
  name: string;
  license_plate: string;
  owner_id: string;
}

const Vehicles: React.FC = () => {
  const [userVehicles, setUserVehicles] = useState<IVehiclesState[]>([]);

  const { token } = useAuth();

  useEffect(() => {
    async function getVehicles() {
      const response = await api.get('/vehicles', {
        headers: { Authorization: `Bearer ${token}` },
      });

      setUserVehicles(response.data);
    }

    getVehicles();
  }, [token]);

  const handleAddVehicle = useCallback(async () => {
    const response = await api.post(
      '/vehicles/add',
      {
        name: 'Testing',
        license_plate: 'test1234',
      },
      { headers: { Authorization: `Bearer ${token}` } },
    );

    setUserVehicles([...userVehicles, response.data]);
  }, [token, userVehicles]);

  return (
    <Container>
      <FlatList
        data={userVehicles}
        keyExtractor={item => item.license_plate}
        style={{ width: '100%' }}
        renderItem={({ item: vehicle }) => (
          <VehicleCard>
            <VehicleAvatarContainer>
              <Image source={carIcon} />
            </VehicleAvatarContainer>

            <VehicleContent>
              <VehicleName>{vehicle.name}</VehicleName>
              <VehicleLicensePlate>{vehicle.license_plate}</VehicleLicensePlate>
            </VehicleContent>
          </VehicleCard>
        )}
      />

      <Button onPress={handleAddVehicle}>Adicionar veículo</Button>
    </Container>
  );
};

export { Vehicles };
