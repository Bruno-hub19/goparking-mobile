import React, { useState, useEffect } from 'react';
import { Image, FlatList } from 'react-native';

import { api } from '../../services/api';

import parkingIcon from '../../assets/parking-icon.png';
import { SelectButton } from '../../components/SelectButton';
import Button from '../../components/Button';

import { useAuth } from '../../hooks/auth';
import { usePayment } from '../../hooks/payment';

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

            <FlatList
              data={payment}
              keyExtractor={pay => pay.id}
              style={{ width: '100%' }}
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
            <VehiclesTitle>
              Escolha o veículo que deseja estacionar
            </VehiclesTitle>
          </VehiclesContainer>

          <Button onPress={() => console.log('Estacionar')}>Estacionar</Button>
        </>
      )}
    </Container>
  );
};

export { Confirmation };
