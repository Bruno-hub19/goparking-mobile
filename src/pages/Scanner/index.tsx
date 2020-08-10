import React, { useCallback, useState, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import QRCodeScanner, { Event } from 'react-native-qrcode-scanner';

import { ScannerTopContent } from '../../components/ScannerTopContent';

const Scanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 500);
  }, []);

  const onSuccess = useCallback((e: Event) => {
    console.log(
      '[QRCODE]: navegar usuário para confirmação com o dado: ',
      e.data,
    );
  }, []);

  if (!isVisible) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#1f1f1f',
        }}
      >
        <ActivityIndicator size="large" color="#29c872" />
      </View>
    );
  }

  return (
    <QRCodeScanner
      onRead={e => onSuccess(e)}
      fadeIn
      showMarker
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
