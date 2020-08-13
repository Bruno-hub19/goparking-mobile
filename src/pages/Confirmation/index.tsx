import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { usePayment } from '../../hooks/payment';
import { useVehicle } from '../../hooks/vehicle';

import { SelectButton } from '../../components/SelectButton';
import Button from '../../components/Button';

import {
  Container,
  TopContent,
  ParkingName,
  ParkingPhone,
  ParkingAddress,
  ParkingPrice,
  PaymentContainer,
  PaymentTitle,
  VehiclesContainer,
  VehiclesTitle,
  VehicleCard,
  VehicleInformation,
  Icon,
} from './styles';

interface IConfirmationProps {
  route: {
    params: {
      parking_id: string;
    };
  };
}

interface IParkingLotState {
  name: string;
  email: string;
  phone: string;
  address: string;
  five_minuts_price: number;
}

const Confirmation: React.FC<IConfirmationProps> = ({ route }) => {
  const [parkingLot, setParkingLot] = useState<IParkingLotState>(
    {} as IParkingLotState,
  );

  const { token } = useAuth();
  const { payment, setPaymentMethod } = usePayment();
  const { loadVehicles, vehicles, setVehicleToPark } = useVehicle();
  const navigation = useNavigation();

  useEffect(() => {
    async function loadUserVehicles(): Promise<void> {
      await loadVehicles(token);
    }

    loadUserVehicles();
  }, [token, loadVehicles]);

  useEffect(() => {
    async function loadParkingLotInformations(): Promise<void> {
      const response = await api.get(
        `/parking/${route.params.parking_id}/info`,
        { headers: { Authorization: `Bearer ${token}` } },
      );

      setParkingLot(response.data);
    }

    loadParkingLotInformations();
  }, [route.params.parking_id, token]);

  const handleSubmit = useCallback(async () => {
    const paymentMethod = payment.find(each => each.selected === true);
    const vehicleId = vehicles.find(each => each.selected === true);

    if (!vehicleId) {
      Alert.alert(
        'Erro ao confirmar dados',
        'Certifique-se de preencher com todos os dados',
      );

      return;
    }

    const response = await api.post(
      '/park',
      {
        parking_id: route.params.parking_id,
        payment_method: paymentMethod?.value,
        vehicle_id: vehicleId?.id,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    navigation.navigate('ParkingStatus', {
      park_id: response.data.id,
    });
  }, [payment, route.params.parking_id, token, vehicles, navigation]);

  return (
    <Container>
      <TopContent>
        <ParkingName>
          <Icon name="flag" size={16} /> {parkingLot.name}
        </ParkingName>
        <ParkingAddress>
          <Icon name="map-pin" size={16} /> {parkingLot.address}
        </ParkingAddress>
        <ParkingPhone>
          <Icon name="smartphone" size={16} /> {parkingLot.phone}
        </ParkingPhone>
        <ParkingPrice>
          R$ {parkingLot.five_minuts_price} / 5 minutos
        </ParkingPrice>
      </TopContent>

      <PaymentContainer>
        <PaymentTitle>Forma de pagamento</PaymentTitle>
        <FlatList
          data={payment}
          keyExtractor={pay => pay.id}
          style={{ width: '100%' }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: pay }) => (
            <SelectButton
              title={pay.value}
              isSelected={pay.selected}
              onPress={() => setPaymentMethod(pay.id)}
              iconName={pay.iconName}
            />
          )}
        />
      </PaymentContainer>

      <VehiclesContainer>
        <VehiclesTitle>Escolha o veículo que deseja estacionar</VehiclesTitle>

        <FlatList
          data={vehicles}
          keyExtractor={vehicle => vehicle.id}
          style={{ width: '100%' }}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item: vehicle }) => (
            <VehicleCard
              isSelected={vehicle.selected}
              onPress={() => setVehicleToPark(vehicle.id)}
            >
              <VehicleInformation>{vehicle.name}</VehicleInformation>
              <VehicleInformation>{vehicle.license_plate}</VehicleInformation>
            </VehicleCard>
          )}
        />
      </VehiclesContainer>

      <Button onPress={handleSubmit}>Estacionar</Button>
    </Container>
  );
};

export { Confirmation };
