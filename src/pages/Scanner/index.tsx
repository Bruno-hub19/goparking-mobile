import React, { useCallback, useState, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import QRCodeScanner, { Event } from 'react-native-qrcode-scanner';

import { ScannerTopContent } from '../../components/ScannerTopContent';

const Scanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
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
      cameraStyle={{ height: 430 }}
      markerStyle={{ borderRadius: 5, borderColor: '#29c872' }}
      checkAndroid6Permissions
      topContent={<ScannerTopContent />}
      topViewStyle={{
        paddingBottom: 80,
      }}
      containerStyle={{ backgroundColor: '#1f1f1f' }}
    />
  );
};

export { Scanner };
