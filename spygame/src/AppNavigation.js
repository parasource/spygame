import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OnlineScreen from './components/screens/Online';
import OfflineScreen from './components/screens/Offline';
import ProfileScreen from './components/screens/Profile';

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Онлайн-игра" component={OnlineScreen} />
            <Tab.Screen name="Оффлайн-игра" component={OfflineScreen} />
            <Tab.Screen name='Профиль' component={ProfileScreen} />
        </Tab.Navigator>
    );
}