import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ICustomButtonProps {
  isSelected: boolean;
}

export const Container = styled.TouchableOpacity<ICustomButtonProps>`
  width: 100%;
  height: 70px;
  border-width: 1px;
  border-color: #29c872;
  border-radius: 5px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  position: relative;
  padding: 0 25px 0 65px;
  background: #1f1f1f;

  ${props =>
    props.isSelected &&
    css`
      background: #29c872;
    `}
`;

export const ButtonText = styled.Text<ICustomButtonProps>`
  font-family: 'Roboto-Medium';
  font-size: 15px;
  color: #29c872;

  ${props =>
    props.isSelected &&
    css`
      color: #2f2f2f;
    `}
`;

// eslint-disable-next-line prettier/prettier
export const Icon = styled(FeatherIcon) <ICustomButtonProps>`
  color: #29c872;
  position: absolute;
  left: 25px;

  ${props =>
    props.isSelected &&
    css`
      color: #2f2f2f;
    `}
`;
