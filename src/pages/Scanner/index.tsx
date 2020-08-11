import React, { useCallback } from 'react';
import QRCodeScanner, { Event } from 'react-native-qrcode-scanner';

import { ScannerTopContent } from '../../components/ScannerTopContent';

const Scanner: React.FC = ({ navigation }: any) => {
  const onSuccess = useCallback(
    (e: Event) => {
      navigation.navigate('Confirmation', {
        parking_id: e.data,
      });
    },
    [navigation],
  );

  return (
    <QRCodeScanner
      onRead={e => onSuccess(e)}
      fadeIn
      showMarker
      reactivate
      reactivateTimeout={2000}
      cameraStyle={{ height: 530 }}
      markerStyle={{ borderRadius: 5, borderColor: '#29c872' }}
      checkAndroid6Permissions
      topContent={<ScannerTopContent />}
      topViewStyle={{ paddingBottom: 0 }}
      containerStyle={{ backgroundColor: '#1f1f1f' }}
    />
  );
};

export { Scanner };
