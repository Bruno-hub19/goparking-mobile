import styled, { css } from 'styled-components/native';

interface ISelectButtonProps {
  isSelected: boolean;
}

export const Container = styled.TouchableOpacity<ISelectButtonProps>`
  width: 100%;
  height: 60px;
  background: #2f2f2f;
  border-radius: 5px;
  border-width: 2px;
  border-color: #2f2f2f;
  padding: 0 20px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 7px;

  ${props =>
    props.isSelected &&
    css`
      border-color: #29c872;
    `}
`;

export const BaseRadio = styled.View`
  width: 23px;
  height: 23px;
  border-radius: 23px;
  border-width: 2px;
  border-color: #29c872;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

export const CheckRadio = styled.View<ISelectButtonProps>`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background: #2f2f2f;

  ${props =>
    props.isSelected &&
    css`
      background: #29c872;
    `}
`;

export const ButtonText = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 15px;
  margin-left: 10px;
  color: #29c872;
`;
