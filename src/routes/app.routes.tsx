import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import Scan from '../pages/Scan';
import Scanner from '../pages/Scanner';

import { SignOutButton } from '../components/SignOutButton';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1f1f1f',
          elevation: 0,
        },
        headerTitle: '',
        headerTintColor: '#fff',
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <AppStack.Screen
        name="Scan"
        component={Scan}
        options={{
          headerRight: () => <SignOutButton />,
          headerRightContainerStyle: {
            paddingRight: 30,
          },
        }}
      />
      <AppStack.Screen name="Scanner" component={Scanner} />
    </AppStack.Navigator>
  );
};

export { AppRoutes };
