import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';

import { useAuth } from '../hooks/auth';

import { SmallButton } from '../components/SmallButton';

import { Scan } from '../pages/Scan';
import { Scanner } from '../pages/Scanner';
import { Confirmation } from '../pages/Confirmation';
import { Vehicles } from '../pages/Vehicles';

const HomeStack = createStackNavigator();
const VehiclesStack = createStackNavigator();
const AppDrawer = createDrawerNavigator();

const HomeStackScreens: React.FC = ({ navigation }: any) => {
  const { signOut } = useAuth();

  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1f1f1f',
          elevation: 0,
        },
        title: '',
        headerTintColor: '#fff',
        ...TransitionPresets.ModalSlideFromBottomIOS,
      }}
    >
      <HomeStack.Screen
        name="Scan"
        component={Scan}
        options={{
          headerLeft: () => (
            <SmallButton name="menu" onPress={() => navigation.openDrawer()} />
          ),
          headerLeftContainerStyle: {
            paddingLeft: 20,
          },
          headerRight: () => (
            <SmallButton name="log-out" onPress={() => signOut()} />
          ),
          headerRightContainerStyle: {
            paddingRight: 20,
          },
          ...TransitionPresets.DefaultTransition,
        }}
      />
      <HomeStack.Screen name="Scanner" component={Scanner} />
      <HomeStack.Screen name="Confirmation" component={Confirmation} />
    </HomeStack.Navigator>
  );
};

const VehiclesStackScreens: React.FC = ({ navigation }: any) => {
  return (
    <VehiclesStack.Navigator
      screenOptions={{
        title: '',
        headerTintColor: '#29c872',
        headerStyle: {
          backgroundColor: '#1f1f1f',
          elevation: 0,
        },
        headerLeft: () => (
          <SmallButton name="menu" onPress={() => navigation.openDrawer()} />
        ),
        headerLeftContainerStyle: {
          paddingLeft: 20,
        },
      }}
    >
      <VehiclesStack.Screen
        name="home"
        component={Vehicles}
        options={{
          title: 'Meus veículos',
        }}
      />
    </VehiclesStack.Navigator>
  );
};

const AppRoutes: React.FC = () => {
  return (
    <AppDrawer.Navigator
      drawerType="back"
      drawerStyle={{ backgroundColor: '#1f1f1f', width: 100 }}
      drawerContentOptions={{
        inactiveBackgroundColor: '#1f1f1f',
        inactiveTintColor: '#29c872',
        activeBackgroundColor: '#2f2f2f',
        activeTintColor: '#29c872',
      }}
      screenOptions={{
        title: '',
      }}
    >
      <AppDrawer.Screen
        name="Home"
        component={HomeStackScreens}
        options={{
          drawerIcon: () => (
            <Icon
              name="home"
              size={20}
              color="#29c872"
              style={{ marginLeft: 20 }}
            />
          ),
        }}
      />
      <AppDrawer.Screen
        name="Vehicles"
        component={VehiclesStackScreens}
        options={{
          drawerIcon: () => (
            <Icon
              name="truck"
              size={20}
              color="#29c872"
              style={{ marginLeft: 20 }}
            />
          ),
        }}
      />
    </AppDrawer.Navigator>
  );
};

export { AppRoutes };
