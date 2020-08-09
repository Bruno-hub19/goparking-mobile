import React from 'react';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Feather';

import {
  ModalContent,
  ModalTitle,
  ModalDescription,
  ModalButtons,
  ModalConfirmButton,
  ModalCancelButton,
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
      isVisible={isVisible}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ModalContent>
        <ModalTitle>{title}</ModalTitle>
        <ModalDescription>{description}</ModalDescription>

        <ModalChildren>{children}</ModalChildren>

        <ModalButtons>
          <ModalCancelButton onPress={cancelBehavior}>
            <Icon name="x" color="#fff" size={25} />
          </ModalCancelButton>

          <ModalConfirmButton onPress={confirmBehavior}>
            <Icon name="check" color="#fff" size={25} />
          </ModalConfirmButton>
        </ModalButtons>
      </ModalContent>
    </Modal>
  );
};

export { CustomModal };
