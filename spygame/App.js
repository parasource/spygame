import * as React from 'react';
import AppNavigation from './src/AppNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import { store } from './src/store/store';

export default function App() {
  return (
    <NavigationContainer>
        <Provider store={store}>
          <AppNavigation />
        </Provider>
    </NavigationContainer>
  );
}