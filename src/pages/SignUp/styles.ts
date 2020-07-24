import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #1f1f1f;
  padding: 0 30px 40px;
  align-items: center;
  justify-content: center;
`;

export const ContentTitle = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: 500;
  margin: 40px 0 24px;
`;

export const SignInButton = styled.TouchableOpacity`
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

export const SignInButtonText = styled.Text`
  font-size: 15px;
  color: #29c872;
  font-weight: bold;
  margin-right: 10px;
`;
