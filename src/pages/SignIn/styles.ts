import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #1f1f1f;
  padding: 0 30px;
  align-items: center;
  justify-content: center;
`;

export const ContentTitle = styled.Text`
  font-size: 20px;
  color: #fff;
  font-family: 'Roboto-Medium';
  margin: 40px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
  font-size: 16px;
  font-family: 'Roboto-Medium';
  color: #7d7d7d;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #1f1f1f;
  padding: 16px 0;
  justify-content: center;
  align-items: center;
  border-top-width: 1px;
  border-color: #29c872;
`;

export const CreateAccountButtonText = styled.Text`
  font-size: 15px;
  font-family: 'Roboto-Medium';
  color: #29c872;
  margin-right: 10px;
`;
