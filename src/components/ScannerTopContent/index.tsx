import React from 'react';
import { Image } from 'react-native';

import qrcodeSmallestImg from '../../assets/qrcode-smallest.png';

import { Container, InstructionsText } from './styles';

const ScannerTopContent: React.FC = () => {
  return (
    <Container>
      <Image source={qrcodeSmallestImg} />

      <InstructionsText>Para estacionar escaneie o código QR</InstructionsText>
    </Container>
  );
};

export { ScannerTopContent };
