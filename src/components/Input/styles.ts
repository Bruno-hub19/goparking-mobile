import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface IContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<IContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  border-radius: 5px;
  background: #2f2f2f;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
  border-width: 2px;
  border-color: #2f2f2f;

  ${props =>
    props.isFocused &&
    css`
      border-color: #29c872;
    `}

  ${props =>
    props.isErrored &&
    css`
      border-color: #f55252;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-family: 'Roboto-Medium';
  font-size: 16px;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 15px;
`;
