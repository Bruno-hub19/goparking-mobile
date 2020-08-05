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
        ...TransitionPresets.ModalSlideFromBottomIOS,
      }}
    >
      <AppStack.Screen
        name="Scan"
        component={Scan}
        options={{
          headerStyle: {
            backgroundColor: '#1f1f1f',
            elevation: 0,
          },
          headerTitle: '',
          headerRight: () => <SignOutButton />,
          headerRightContainerStyle: {
            paddingRight: 30,
          },
        }}
      />
      <AppStack.Screen
        name="Scanner"
        component={Scanner}
        options={{
          headerShown: false,
        }}
      />
    </AppStack.Navigator>
  );
};

export { AppRoutes };
