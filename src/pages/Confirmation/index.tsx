import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

import { api } from '../../services/api';

import parkingIcon from '../../assets/parking-icon.png';
import Button from '../../components/Button';

import { useAuth } from '../../hooks/auth';

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
  const [paymentValue, setPaymentValue] = useState('nothing');

  const { token } = useAuth();

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

            <DropDownPicker
              items={[
                {
                  label: 'Selecione uma opção',
                  value: 'nothing',
                  disabled: true,
                },
                {
                  label: 'Débito ou Crédito',
                  value: 'card',
                  icon: () => (
                    <Icon name="credit-card" size={20} color="#29C872" />
                  ),
                },
                {
                  label: 'Dinheiro',
                  value: 'money',
                  icon: () => (
                    <Icon name="dollar-sign" size={20} color="#29C872" />
                  ),
                },
              ]}
              defaultValue={paymentValue}
              containerStyle={{ height: 60, width: '100%' }}
              style={{
                backgroundColor: '#2f2f2f',
                borderColor: '#2f2f2f',
                paddingHorizontal: 30,
              }}
              itemStyle={{
                paddingLeft: 20,
                justifyContent: 'flex-start',
              }}
              dropDownStyle={{
                backgroundColor: '#2f2f2f',
                borderColor: '#2f2f2f',
              }}
              labelStyle={{
                padding: 10,
                color: '#29C872',
                fontFamily: 'Roboto-Medium',
                fontSize: 15,
              }}
              activeLabelStyle={{
                color: '#29C872',
              }}
              activeItemStyle={{
                backgroundColor: '#1f1f1f',
                borderRadius: 5,
              }}
              arrowColor="#29C872"
              onChangeItem={item => {
                setPaymentValue(item.value);
              }}
            />
          </PaymentContainer>

          <VehiclesContainer>
            <VehiclesTitle>Seu veículo atual é: Gol - ABD8900</VehiclesTitle>
          </VehiclesContainer>

          <Button onPress={() => console.log('Estacionar')}>Estacionar</Button>
        </>
      )}
    </Container>
  );
};

export { Confirmation };
