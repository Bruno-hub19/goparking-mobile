import React, { useCallback } from 'react';
import { TouchableOpacityProps } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

const SignOutButton: React.FC<TouchableOpacityProps> = () => {
  const { signOut } = useAuth();

  const handleSignOut = useCallback(() => {
    signOut();
  }, [signOut]);

  return (
    <Container onPress={handleSignOut}>
      <Icon name="power" size={20} color="#fff" />
    </Container>
  );
};

export { SignOutButton };
