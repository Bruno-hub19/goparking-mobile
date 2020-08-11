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

const AppBottomTabs = createBottomTabNavigator();
const AppStack = createStackNavigator();

const AppBottomTabsScreens: React.FC = () => {
  return (
    <AppBottomTabs.Navigator
      initialRouteName="Scan"
      tabBarOptions={{
        activeTintColor: '#29c872',
        inactiveTintColor: '#7d7d7d',
        style: {
          borderTopColor: '#2f2f2f',
          height: 50,
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
        component={Vehicles}
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
        component={Scan}
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
        component={Scanner}
        options={{
          tabBarLabel: 'Scanear',
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

const AppRoutes: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <AppStack.Navigator
      screenOptions={{
        title: '',
        headerStyle: {
          backgroundColor: '#1f1f1f',
          elevation: 0,
        },
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
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <AppStack.Screen name="Home" component={AppBottomTabsScreens} />
      <AppStack.Screen name="Confirmation" component={Confirmation} />
    </AppStack.Navigator>
  );
};

export { AppRoutes };
