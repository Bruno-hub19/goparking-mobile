import React, { useEffect, useCallback } from 'react';
import { FlatList, Image, View, ActivityIndicator } from 'react-native';

import { useAuth } from '../../hooks/auth';
import { useVehicle } from '../../hooks/vehicle';

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

const Vehicles: React.FC = () => {
  const { token } = useAuth();
  const {
    vehicles,
    loadVehicles,
    addVehicle,
    removeVehicle,
    isLoading,
  } = useVehicle();

  useEffect(() => {
    setTimeout(() => {
      loadVehicles(token);
    }, 500);
  }, [token, loadVehicles]);

  const handleAddVehicle = useCallback(async () => {
    await addVehicle({
      user_token: token,
      vehicle: {
        name: 'M2 Competition',
        license_plate: 'ADB3E87',
      },
    });
  }, [addVehicle, token]);

  const handleRemoveVehicle = useCallback(
    async (vehicle_id: string) => {
      await removeVehicle({
        user_token: token,
        vehicle_id,
      });
    },
    [removeVehicle, token],
  );

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#1f1f1f',
        }}
      >
        <ActivityIndicator size="large" color="#29c872" />
      </View>
    );
  }

  return (
    <Container>
      <FlatList
        data={vehicles}
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
