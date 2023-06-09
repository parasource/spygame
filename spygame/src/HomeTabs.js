import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OnlineScreen from './components/pages/createOnlinePage';
import OfflineScreen from './components/pages/createOfflinePage';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Онлайн-игра" component={OnlineScreen} />
            <Tab.Screen name="Оффлайн-игра" component={OfflineScreen} />
        </Tab.Navigator>
    );
}