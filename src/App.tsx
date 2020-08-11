import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

import { AppProvider } from './hooks';
import { Routes } from './routes';

const App: React.FC = () => {
  useEffect(() => {
    changeNavigationBarColor('#2f2f2f', false, false);
  }, []);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#1f1f1f" barStyle="light-content" />

      <AppProvider>
        <Routes />
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
