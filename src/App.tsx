import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { AppProvider } from './hooks';
import { Routes } from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar backgroundColor="#1F1F1F" barStyle="light-content" />

    <AppProvider>
      <Routes />
    </AppProvider>
  </NavigationContainer>
);

export default App;
