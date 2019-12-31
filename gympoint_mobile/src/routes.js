import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Image } from 'react-native';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Tickets from './pages/Tickets';
import { coralRed, white } from '~/styles/colors';
import logo from '~/assets/header-logo.png';

const AppTab = createBottomTabNavigator(
  {
    Dashboard,
    Tickets,
  },
  {
    tabBarOptions: {
      keyboardHidesTabBar: true,
      activeTintColor: white,
      inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
      style: {
        backgroundColor: coralRed,
      },
    },
  }
);

export default (signed = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        SignIn,
        App: createStackNavigator(
          { AppTab },
          {
            defaultNavigationOptions: {
              headerTitle: () => <Image source={logo} />,
            },
          }
        ), // using stack to render same header; xgh sz
      },
      {
        initialRouteName: signed ? 'App' : 'SignIn',
      }
    )
  );
