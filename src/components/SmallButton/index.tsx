import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { TouchableOpacityProps } from 'react-native';

import { Container } from './styles';

interface ISmallButtonProps extends TouchableOpacityProps {
  name: string;
}

const SmallButton: React.FC<ISmallButtonProps> = ({ name, ...rest }) => {
  return (
    <Container {...rest}>
      <Icon name={name} size={25} color="#29c872" />
    </Container>
  );
};

export { SmallButton };
