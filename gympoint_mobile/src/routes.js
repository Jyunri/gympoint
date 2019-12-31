import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';

export default (signed = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        SignIn,
        Dashboard,
      },
      {
        initialRouteName: signed ? 'Dashboard' : 'SignIn',
      }
    )
  );
