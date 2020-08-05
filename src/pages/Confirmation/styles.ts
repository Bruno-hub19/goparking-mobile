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
  margin-top: 20px;
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
  margin-bottom: 20px;
  text-align: center;
`;

export const ParkingPrice = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 20px;
  color: #29c872;
`;
