import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #1f1f1f;
  padding: 20px 30px 0;
  justify-content: center;
  align-items: center;
`;

export const VehicleCard = styled.TouchableOpacity`
  width: 100%;
  height: 100px;
  border-radius: 5px;
  background: #2f2f2f;
  padding: 5px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
`;

export const VehicleLicensePlate = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 20px;
  color: #fff;
`;
