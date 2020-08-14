import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, Image } from 'react-native';

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import parkingIcon from '../../assets/parking-icon.png';
import Button from '../../components/Button';

import {
  Container,
  TopContent,
  ParkingName,
  ParkingAddress,
  ParkingPhone,
  ParkingPrice,
  Icon,
  StatusText,
  SmallStatusText,
} from './styles';

interface IParkInfosState {
  parking: {
    name: string;
    email: string;
    phone: string;
    address: string;
    five_minuts_price: number;
  };
}

interface IStatusProps {
  route: {
    params: {
      park_id: string;
    };
  };
}

const Status: React.FC<IStatusProps> = ({ route }) => {
  const [parkInfos, setParkInfos] = useState<IParkInfosState>(
    {} as IParkInfosState,
  );
  const [isLoading, setIsLoading] = useState(true);

  const { token } = useAuth();

  useEffect(() => {
    async function getParkInfos() {
      const response = await api.get(`/park/one/${route.params.park_id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setParkInfos(response.data);

      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }

    getParkInfos();
  }, [route.params.park_id, token]);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#1f1f1f',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ActivityIndicator size="large" color="#29c872" />
      </View>
    );
  }

  return (
    <Container>
      <Image source={parkingIcon} />

      <StatusText>Você está estacionado</StatusText>
      <SmallStatusText>
        Você pode finalizar o serviço à qualquer momento
      </SmallStatusText>

      <TopContent>
        <ParkingName>
          <Icon name="flag" size={16} /> {parkInfos.parking.name}
        </ParkingName>
        <ParkingAddress>
          <Icon name="map-pin" size={16} /> {parkInfos.parking.address}
        </ParkingAddress>
        <ParkingPhone>
          <Icon name="smartphone" size={16} /> {parkInfos.parking.phone}
        </ParkingPhone>
        <ParkingPrice>
          R$ {parkInfos.parking.five_minuts_price} / 5 minutos
        </ParkingPrice>
      </TopContent>

      <Button>Finalizar serviço</Button>
    </Container>
  );
};

export { Status };
