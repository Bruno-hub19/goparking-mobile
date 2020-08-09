import styled from 'styled-components/native';

export const ModalContent = styled.View`
  width: 100%;
  background: #1f1f1f;
  border-radius: 5px;
  padding: 30px 10px;
  align-items: center;
  justify-content: space-around;
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

export const ModalButtons = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10px;
`;

export const ModalConfirmButton = styled.TouchableOpacity`
  width: 120px;
  background: #29c872;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const ModalCancelButton = styled(ModalConfirmButton)`
  background: #f55252;
`;

export const ModalChildren = styled.View`
  width: 100%;
  padding: 0 10px;
  margin-bottom: 15px;
`;
