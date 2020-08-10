import React, { useEffect } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/auth';
import { useVehicle } from '../../hooks/vehicle';

import Button from '../../components/Button';
import logoImg from '../../assets/logo.png';
import qrcodeImage from '../../assets/qr-code.png';

import { Container, HelloText, InstructionText } from './styles';

const Scan: React.FC = () => {
  const navigation = useNavigation();

  const { user, token } = useAuth();
  const { loadVehicles } = useVehicle();

  useEffect(() => {
    setTimeout(async () => {
      await loadVehicles(token);
    }, 500);
  }, [token, loadVehicles]);

  return (
    <Container>
      <Image source={logoImg} />

      <HelloText>Olá, {user.name}!</HelloText>

      <InstructionText>
        Para estacionar escaneie o código QR do estacionamento
      </InstructionText>

      <Image source={qrcodeImage} style={{ marginBottom: 60 }} />

      <Button onPress={() => navigation.navigate('Scanner')}>
        Abrir scanner
      </Button>
    </Container>
  );
};

export { Scan };
