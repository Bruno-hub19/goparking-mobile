import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';
import qrcodeImage from '../../assets/qrcode.png';

import { Container, HelloText, InstructionText } from './styles';

const Scan: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Image source={logoImg} />

      <HelloText>Olá, Bruno!</HelloText>

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

export default Scan;
