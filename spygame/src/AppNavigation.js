import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeTabs from './HomeTabs';
import EmptyPage from './components/pages/EmptyPage';

const Stack = createNativeStackNavigator()

export default function AppNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Home' component={HomeTabs} />
            <Stack.Screen name='Empty' component={EmptyPage} />
        </Stack.Navigator>
    );
}