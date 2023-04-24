import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeTabs from './HomeTabs';
import EmptyPage from './components/pages/EmptyPage';

const Stack = createNativeStackNavigator()

export default function AppNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeTabs} />
            <Stack.Screen name='Empty' component={EmptyPage} />
        </Stack.Navigator>
    );
}