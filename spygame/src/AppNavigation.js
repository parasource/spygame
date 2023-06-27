import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeTabs from './HomeTabs';
import gameOfflinePage from './components/pages/gameOfflinePage';
import OfflineScreen from './components/pages/createOfflinePage';

const Stack = createNativeStackNavigator()

export default function AppNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Home' component={OfflineScreen} />
            <Stack.Screen name='Offline-game' component={gameOfflinePage} />
        </Stack.Navigator>
    );
}