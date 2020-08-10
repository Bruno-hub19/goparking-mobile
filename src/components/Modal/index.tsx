import React from 'react';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Feather';

import {
  ModalContent,
  ModalTitle,
  ModalDescription,
  ModalConfirmButton,
  ModalCancelButton,
  ButtonText,
  ModalChildren,
} from './styles';

interface ICustomModalProps {
  isVisible: boolean;
  title: string;
  description: string;
  cancelBehavior: any;
  confirmBehavior: any;
}

const CustomModal: React.FC<ICustomModalProps> = ({
  isVisible,
  title,
  description,
  cancelBehavior,
  confirmBehavior,
  children,
}) => {
  return (
    <Modal
      animationIn="zoomIn"
      animationOut="slideOutDown"
      animationInTiming={700}
      animationOutTiming={400}
      isVisible={isVisible}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
      backdropOpacity={0.8}
    >
      <ModalContent>
        <ModalCancelButton onPress={cancelBehavior}>
          <Icon name="x" color="#f55252" size={25} />
        </ModalCancelButton>

        <ModalTitle>{title}</ModalTitle>
        <ModalDescription>{description}</ModalDescription>

        <ModalChildren>{children}</ModalChildren>

        <ModalConfirmButton onPress={confirmBehavior}>
          <ButtonText>Confirmar</ButtonText>
        </ModalConfirmButton>
      </ModalContent>
    </Modal>
  );
};

export { CustomModal };
