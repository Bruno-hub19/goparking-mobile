import React, { useState, useCallback } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import QRCodeScanner from 'react-native-qrcode-scanner';

import Button from '../../components/Button';
import logoImg from '../../assets/logo.png';

const Scanner: React.FC = () => {
  const [qrCodeData, setQrCodeData] = useState('');

  const navigation = useNavigation();

  console.log(qrCodeData);

  const onSuccess = useCallback(
    e => {
      setQrCodeData(e.data);

      navigation.goBack();
    },
    [navigation],
  );

  return (
    <QRCodeScanner
      onRead={e => onSuccess(e)}
      showMarker
      markerStyle={{ borderRadius: 5, borderColor: '#29c872' }}
      checkAndroid6Permissions
      topContent={<Image source={logoImg} />}
      topViewStyle={{
        paddingBottom: 70,
      }}
      // eslint-disable-next-line prettier/prettier
      bottomContent={(
        <Button
          style={{
            height: '53%',
            borderRadius: 0,
            backgroundColor: '#F55252',
            position: 'absolute',
            bottom: 0,
          }}
          onPress={() => navigation.goBack()}
        >
          Cancelar
        </Button>
        // eslint-disable-next-line prettier/prettier
      )}
      containerStyle={{ backgroundColor: '#1f1f1f' }}
    />
  );
};

export default Scanner;
