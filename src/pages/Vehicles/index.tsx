import React, { useState, useEffect } from 'react';
import { FlatList, Image } from 'react-native';

import { useAuth } from '../../hooks/auth';

import carIcon from '../../assets/car-icon.png';

import Button from '../../components/Button';

import {
  Container,
  VehicleCard,
  VehicleAvatarContainer,
  VehicleContent,
  VehicleName,
  VehicleLicensePlate,
} from './styles';

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
            <VehicleAvatarContainer>
              <Image source={carIcon} />
            </VehicleAvatarContainer>

            <VehicleContent>
              <VehicleName>Gol</VehicleName>
              <VehicleLicensePlate>{vehicle.license_plate}</VehicleLicensePlate>
            </VehicleContent>
          </VehicleCard>
        )}
      />

      <Button onPress={() => console.log('Adicionar veículo')}>
        Adicionar veículo
      </Button>
    </Container>
  );
};

export { Vehicles };
