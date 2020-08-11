import React from 'react';
import { Image } from 'react-native';

import avatar from '../../assets/meu-avatar.png';

import { Container } from './styles';

const Profile: React.FC = () => {
  return (
    <Container>
      <Image source={avatar} />
    </Container>
  );
};

export { Profile };
