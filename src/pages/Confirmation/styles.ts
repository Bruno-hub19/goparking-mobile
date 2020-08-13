import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface IVehicleProps {
  isSelected: boolean;
}

export const Container = styled.View`
  flex: 1;
  background: #1f1f1f;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const TopContent = styled.View`
  width: 100%;
  align-items: flex-start;
  justify-content: center;
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

export const PaymentContainer = styled.View`
  width: 100%;
`;

export const PaymentTitle = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 15px;
  color: #ffff;
  margin-bottom: 15px;
`;

export const VehiclesContainer = styled.View`
  width: 100%;
  margin-bottom: 15px;
`;

export const VehiclesTitle = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 15px;
  color: #ffff;
  margin-top: 10px;
  margin-bottom: 15px;
`;

export const VehicleCard = styled.TouchableOpacity<IVehicleProps>`
  width: 100px;
  height: 100px;
  background: #2f2f2f;
  border-radius: 5px;
  border-width: 2px;
  border-color: #2f2f2f;
  margin-right: 10px;
  justify-content: center;
  align-items: center;

  ${props =>
    props.isSelected &&
    css`
      border-color: #29c872;
    `}
`;

export const VehicleInformation = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 15px;
  color: #29c872;
`;

export const Icon = styled(FeatherIcon)`
  color: #29c872;
`;
