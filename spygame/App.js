import * as React from 'react';
import AppNavigation from './src/AppNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import { store } from './src/store/store';
import { NetworkProvider } from 'react-native-offline';
import { useState } from 'react';
import useFonts from './src/hooks/useFont';
import AppLoading from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen';


export default function App() {
  const [IsReady, SetIsReady] = useState(false);

	const LoadFonts = async () => {
    await useFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={async () => {
          await SplashScreen.preventAutoHideAsync()
          SetIsReady(true)
        }}
        onError={error => console.log(error)}
      />
    );
  }

  return (
    <NavigationContainer>
      <Provider store={store}>
        <NetworkProvider>
					<SafeAreaProvider>
          	<AppNavigation />
					</SafeAreaProvider>
        </NetworkProvider>
      </Provider>
    </NavigationContainer>
  );
}
