import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import avatar from '../assets/meu-avatar.png';

import { useAuth } from '../hooks/auth';
import { SmallButton } from '../components/SmallButton';

import { Scan } from '../pages/Scan';
import { Scanner } from '../pages/Scanner';
import { Confirmation } from '../pages/Confirmation';
import { Vehicles } from '../pages/Vehicles';

const ScanStack = createStackNavigator();
const ScannerStack = createStackNavigator();
const VehiclesStack = createStackNavigator();
const AppBottomTabs = createBottomTabNavigator();

const ScanStackScreens: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <ScanStack.Navigator
      screenOptions={{
        title: '',
        headerStyle: {
          backgroundColor: '#1f1f1f',
          elevation: 0,
        },
      }}
    >
      <ScanStack.Screen
        name="Home"
        component={Scan}
        options={{
          headerRightContainerStyle: {
            paddingRight: 20,
          },
          headerRight: () => (
            <SmallButton iconName="log-out" onPress={() => signOut()} />
          ),
          headerLeftContainerStyle: {
            paddingLeft: 20,
          },
          headerLeft: () => (
            <TouchableOpacity style={{ width: 30, height: 30 }}>
              <Image
                source={avatar}
                style={{
                  width: 30,
                  height: 30,
                  flex: 1,
                  borderRadius: 30,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </ScanStack.Navigator>
  );
};

const ScannerStackScreens: React.FC = () => {
  return (
    <ScannerStack.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#1f1f1f',
          elevation: 0,
        },
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <ScannerStack.Screen
        name="Home"
        component={Scanner}
        options={{
          headerShown: false,
        }}
      />
      <ScannerStack.Screen
        name="Confirmation"
        component={Confirmation}
        options={{
          title: 'Confirmação',
        }}
      />
    </ScannerStack.Navigator>
  );
};

const VehiclesStackScreens: React.FC = () => {
  return (
    <VehiclesStack.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#1f1f1f',
          elevation: 0,
        },
      }}
    >
      <VehiclesStack.Screen
        name="Home"
        component={Vehicles}
        options={{
          title: 'Veículos',
          headerLeftContainerStyle: {
            paddingLeft: 20,
          },
          headerLeft: () => (
            <TouchableOpacity style={{ width: 30, height: 30 }}>
              <Image
                source={avatar}
                style={{
                  width: 30,
                  height: 30,
                  flex: 1,
                  borderRadius: 30,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </VehiclesStack.Navigator>
  );
};

const AppRoutes: React.FC = () => {
  return (
    <AppBottomTabs.Navigator
      initialRouteName="Scan"
      tabBarOptions={{
        activeTintColor: '#29c872',
        inactiveTintColor: '#7d7d7d',
        style: {
          borderTopColor: '#2f2f2f',
          height: 52,
        },
        tabStyle: {
          backgroundColor: '#2f2f2f',
          paddingTop: 10,
        },
        labelStyle: {
          paddingBottom: 4,
          fontSize: 13,
          fontWeight: 'bold',
        },
      }}
    >
      <AppBottomTabs.Screen
        name="Vehicles"
        component={VehiclesStackScreens}
        options={{
          tabBarLabel: 'Veículos',
          tabBarIcon: ({ focused }) => (
            <Icon
              name="truck"
              size={20}
              color={focused ? '#29c872' : '#7d7d7d'}
            />
          ),
        }}
      />
      <AppBottomTabs.Screen
        name="Scan"
        component={ScanStackScreens}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ focused }) => (
            <Icon
              name="home"
              size={20}
              color={focused ? '#29c872' : '#7d7d7d'}
            />
          ),
        }}
      />
      <AppBottomTabs.Screen
        name="Scanner"
        component={ScannerStackScreens}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="maximize"
              size={20}
              color={focused ? '#29c872' : '#7d7d7d'}
            />
          ),
        }}
      />
    </AppBottomTabs.Navigator>
  );
};

export { AppRoutes };
