import React, { useCallback, useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import QRCodeScanner, { Event } from 'react-native-qrcode-scanner';
import { useNavigation } from '@react-navigation/native';

import { ScannerTopContent } from '../../components/ScannerTopContent';

const Scanner: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const onSuccess = useCallback(
    (e: Event) => {
      navigation.navigate('Confirmation', {
        parking_id: e.data,
      });
    },
    [navigation],
  );

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#1f1f1f',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ActivityIndicator color="#29c872" size="large" />
      </View>
    );
  }

  return (
    <QRCodeScanner
      onRead={e => onSuccess(e)}
      fadeIn
      showMarker
      reactivate
      reactivateTimeout={2000}
      cameraStyle={{ height: 500 }}
      markerStyle={{ borderRadius: 5, borderColor: '#29c872' }}
      checkAndroid6Permissions
      topContent={<ScannerTopContent />}
      topViewStyle={{ paddingBottom: 20 }}
      containerStyle={{ backgroundColor: '#1f1f1f' }}
    />
  );
};

export { Scanner };
