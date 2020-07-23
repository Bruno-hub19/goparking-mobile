import React from 'react';
import { View, StatusBar } from 'react-native';

const App: React.FC = () => (
  <>
    <StatusBar backgroundColor="#181818" barStyle="light-content" />
    <View style={{ flex: 1, backgroundColor: '#181818' }} />
  </>
);

export default App;
