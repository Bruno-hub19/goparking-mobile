import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';

import { api } from '../../services/api';
import parkingIcon from '../../assets/parking-icon.png';

import {
  Container,
  TopContent,
  ParkingName,
  ParkingPhone,
  ParkingAddress,
  ParkingPrice,
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
        <TopContent>
          <Image source={parkingIcon} />

          <ParkingName>{parkingLot.name}</ParkingName>
          <ParkingAddress>{parkingLot.address}</ParkingAddress>
          <ParkingPhone>{parkingLot.phone}</ParkingPhone>
          <ParkingPrice>
            R$ {parkingLot.five_minuts_price} / 5 minutos
          </ParkingPrice>
        </TopContent>
      )}
    </Container>
  );
};

export { Confirmation };
