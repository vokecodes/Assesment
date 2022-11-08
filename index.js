import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './store/index';
import App from './App';
import {name as appName} from './app.json';
import {Text} from 'react-native-svg';

const AppSource = () => (
  <Provider store={store}>
    <PersistGate loading={<Text> Loading....</Text>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppSource);
