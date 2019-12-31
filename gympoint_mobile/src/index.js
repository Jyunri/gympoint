import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import { store, persistor } from '~/store';
import { white } from '~/styles/colors';
import Routes from '~/routes';

export default function Index() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar barStyle="light-content" backgroundColor={white} />
          <Routes />
        </PersistGate>
      </Provider>
    </>
  );
}
