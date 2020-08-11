import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import avatar from '../../../assets/meu-avatar.png';

import { Container } from './styles';

const ProfileButton: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <Container onPress={() => navigate('Profile')}>
      <Image
        source={avatar}
        style={{
          width: 30,
          height: 30,
          flex: 1,
          resizeMode: 'cover',
          borderRadius: 30,
        }}
      />
    </Container>
  );
};

export { ProfileButton };
