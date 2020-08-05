import React from 'react';

import { Container } from './styles';

interface IConfirmationProps {
  route: {
    params: {
      parking_id: string;
    };
  };
}

const Confirmation: React.FC<IConfirmationProps> = ({ route }) => {
  console.log(route.params.parking_id);

  // fazer chamada api para pegar informações do estacionamento

  return <Container />;
};

export { Confirmation };
