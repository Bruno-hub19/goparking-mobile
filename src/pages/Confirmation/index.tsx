import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';

import { api } from '../../services/api';

import { SelectButton } from '../../components/SelectButton';
import Button from '../../components/Button';
import parkingIcon from '../../assets/parking-icon.png';

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
  VehiclesHorizontalScroll,
  VehicleCard,
  VehicleName,
  VehicleLicensePlate,
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

  useEffect(() => {
    async function loadParkingLotInformations(): Promise<void> {
      const response = await api.get(
        `/parking/${route.params.parking_id}/info`,
      );

      setParkingLot(response.data);
    }

    loadParkingLotInformations();
  }, [route.params.parking_id]);

  return (
    <Container>
      {parkingLot && (
        <>
          <TopContent>
            <Image source={parkingIcon} />

            <ParkingName>{parkingLot.name}</ParkingName>
            <ParkingAddress>{parkingLot.address}</ParkingAddress>
            <ParkingPhone>{parkingLot.phone}</ParkingPhone>
            <ParkingPrice>
              R$ {parkingLot.five_minuts_price} / 5 minutos
            </ParkingPrice>
          </TopContent>

          <PaymentContainer>
            <PaymentTitle>Forma de pagamento</PaymentTitle>

            <SelectButton iconName="credit-card">
              Crédito ou Débito
            </SelectButton>

            <SelectButton iconName="dollar-sign">Dinheiro</SelectButton>
          </PaymentContainer>

          <VehiclesContainer>
            <VehiclesTitle>
              Selecione o veículo que deseja estacionar
            </VehiclesTitle>

            <VehiclesHorizontalScroll
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ padding: 10, paddingRight: 0 }}
            >
              <VehicleCard>
                <VehicleName>Gol</VehicleName>
                <VehicleLicensePlate>ABC0000</VehicleLicensePlate>
              </VehicleCard>

              <VehicleCard>
                <VehicleName>Gol</VehicleName>
                <VehicleLicensePlate>ABC0000</VehicleLicensePlate>
              </VehicleCard>

              <VehicleCard>
                <VehicleName>Gol</VehicleName>
                <VehicleLicensePlate>ABC0000</VehicleLicensePlate>
              </VehicleCard>

              <VehicleCard>
                <VehicleName>Gol</VehicleName>
                <VehicleLicensePlate>ABC0000</VehicleLicensePlate>
              </VehicleCard>
            </VehiclesHorizontalScroll>
          </VehiclesContainer>

          <Button onPress={() => console.log('Estacionar')}>Estacionar</Button>
        </>
      )}
    </Container>
  );
};

export { Confirmation };
