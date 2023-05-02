import * as React from 'react';
import AppNavigation from './src/AppNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import { store } from './src/store/store';
import { NetworkProvider } from 'react-native-offline';


export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <NetworkProvider>
          <AppNavigation />
        </NetworkProvider>
      </Provider>
    </NavigationContainer>
  );
}
