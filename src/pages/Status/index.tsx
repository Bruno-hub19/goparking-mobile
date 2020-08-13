import React from 'react';
import { View, Text } from 'react-native';
// import { useNavigation, CommonActions } from '@react-navigation/native';
// import { Container } from './styles';

interface IStatusProps {
  route: {
    params: {
      park_id: string;
    };
  };
}

const Status: React.FC<IStatusProps> = ({ route }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#1f1f1f',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{ fontFamily: 'Roboto-Medium', fontSize: 15, color: '#fff' }}
      >
        Park ID: {route.params.park_id}
      </Text>
    </View>
  );
};

export { Status };
