import React from 'react';

import { Container } from './styles';

interface IConfirmationProps {
  route: {
    params: {
      testing: string;
    };
  };
}

const Confirmation: React.FC<IConfirmationProps> = ({ route }) => {
  console.log(route.params.testing);

  return <Container />;
};

export { Confirmation };
