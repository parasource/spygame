import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OnlineScreen from './components/screens/Online';
import OfflineScreen from './components/screens/Offline';

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Онлайн-игра" component={OnlineScreen} />
            <Tab.Screen name="Оффлайн-игра" component={OfflineScreen} />
        </Tab.Navigator>
    );
}