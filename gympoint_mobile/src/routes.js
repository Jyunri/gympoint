import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '~/assets/header-logo.png';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Tickets from './pages/Tickets';
import TicketDetail from './pages/Tickets/TicketDetail';
import NewTicket from './pages/Tickets/New';
import Header from '~/components/Header';
import { coralRed, white } from '~/styles/colors';

const AppTab = createBottomTabNavigator(
  {
    Dashboard,
    Tickets: createStackNavigator(
      { Tickets, TicketDetail, NewTicket },
      {
        navigationOptions: {
          tabBarLabel: 'Pedir Ajuda',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="help" size={20} color={tintColor} />
          ),
        },
        initialRouteName: 'Tickets',
        headerMode: 'none',
      }
    ),
  },
  {
    resetOnBlur: true,
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
              headerRight: () => <Header />,
            },
          }
        ), // using stack to render same header; xgh sz
      },
      {
        initialRouteName: signed ? 'App' : 'SignIn',
      }
    )
  );
