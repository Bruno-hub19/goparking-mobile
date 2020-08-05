import React, { useCallback } from 'react';
import QRCodeScanner, { Event } from 'react-native-qrcode-scanner';
import { useNavigation } from '@react-navigation/native';

import { ScannerTopContent } from '../../components/ScannerTopContent';

const Scanner: React.FC = () => {
  const navigation = useNavigation();

  const onSuccess = useCallback(
    (e: Event) => {
      navigation.navigate('Confirmation', {
        parking_id: e.data,
      });
    },
    [navigation],
  );

  return (
    <>
      <QRCodeScanner
        onRead={e => onSuccess(e)}
        fadeIn
        showMarker
        cameraStyle={{ height: 430 }}
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
