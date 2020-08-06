import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #1f1f1f;
  align-items: center;
  padding: 0 30px;
`;

export const TopContent = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ParkingName = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 20px;
  color: #fff;
  margin-top: 6px;
  text-align: center;
`;

export const ParkingAddress = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 15px;
  color: #7d7d7d;
  text-align: center;
`;

export const ParkingPhone = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 15px;
  color: #7d7d7d;
  margin-bottom: 6px;
  text-align: center;
`;

export const ParkingPrice = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 20px;
  margin-bottom: 15px;
  color: #29c872;
`;

export const PaymentContainer = styled.View`
  width: 100%;
  height: 180px;
  margin-bottom: 5px;
`;

export const PaymentTitle = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 15px;
  color: #ffff;
  margin-bottom: 6px;
`;

export const VehiclesContainer = styled.View`
  width: 100%;
  height: 170px;
`;

export const VehiclesTitle = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 15px;
  color: #ffff;
  margin-bottom: 6px;
`;

export const VehiclesHorizontalScroll = styled.ScrollView`
  width: 100%;
`;

export const VehicleCard = styled.View`
  width: 120px;
  height: 120px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-right: 10px;
  background: #29c872;
`;

export const VehicleName = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 15px;
  color: #000;
`;

export const VehicleLicensePlate = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 15px;
  color: #000;
`;
