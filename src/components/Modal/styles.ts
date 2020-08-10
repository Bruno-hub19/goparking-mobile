import styled from 'styled-components/native';

export const ModalContent = styled.View`
  width: 100%;
  background: #1f1f1f;
  border-radius: 5px;
  padding: 30px 15px;
  align-items: center;
  justify-content: space-around;
  position: relative;
`;

export const ModalTitle = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 20px;
  color: #fff;
  text-align: center;
  margin-bottom: 10px;
`;

export const ModalDescription = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 15px;
  color: #7d7d7d;
  text-align: center;
  margin-bottom: 15px;
`;

export const ModalConfirmButton = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  background: #29c872;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const ModalCancelButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  /* background: #f55252; */
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
`;

export const ButtonText = styled.Text`
  color: #2f2f2f;
  font-family: 'Roboto-Medium';
  font-size: 15px;
`;

export const ModalChildren = styled.View`
  width: 100%;
  margin-bottom: 10px;
`;
