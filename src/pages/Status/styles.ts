import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  background: #1f1f1f;
  padding: 0 30px;
  justify-content: center;
  align-items: center;
`;

export const StatusText = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 20px;
  margin-top: 10px;
  color: #fff;
  text-align: center;
`;

export const SmallStatusText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 15px;
  color: #7d7d7d;
  text-align: center;
  margin-top: 10px;
`;

export const TopContent = styled.View`
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  margin-top: 25px;
`;

export const ParkingName = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 20px;
  color: #fff;
  text-align: center;
  margin-bottom: 5px;
`;

export const ParkingAddress = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 15px;
  color: #7d7d7d;
  text-align: center;
  margin-bottom: 5px;
`;

export const ParkingPhone = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 15px;
  color: #7d7d7d;
  margin-bottom: 15px;
  text-align: center;
`;

export const ParkingPrice = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 20px;
  margin-bottom: 20px;
  color: #29c872;
`;

export const Icon = styled(FeatherIcon)`
  color: #29c872;
`;
