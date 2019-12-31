import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';

export default createAppContainer(
  createSwitchNavigator({
    SignIn,
    Dashboard,
  })
);
