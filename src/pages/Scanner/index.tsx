import React, { useState, useCallback } from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { useNavigation } from '@react-navigation/native';

import { ScannerTopContent } from '../../components/ScannerTopContent';

const Scanner: React.FC = () => {
  const [qrCodeData, setQrCodeData] = useState('');

  const navigation = useNavigation();

  const onSuccess = useCallback(
    e => {
      setQrCodeData(e.data);

      navigation.goBack();
    },
    [navigation],
  );

  return (
    <>
      <QRCodeScanner
        onRead={e => onSuccess(e)}
        showMarker
        markerStyle={{ borderRadius: 5, borderColor: '#29c872' }}
        checkAndroid6Permissions
        topContent={<ScannerTopContent />}
        topViewStyle={{
          paddingBottom: 80,
        }}
        containerStyle={{ backgroundColor: '#1f1f1f' }}
      />
    </>
  );
};

export default Scanner;
