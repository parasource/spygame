import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OnlineScreen from './screens/Online';
import OfflineScreen from './screens/Offline';
import ProfileScreen from './screens/Profile';

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                }}
            >
                <Tab.Screen name="Онлайн-игра" component={OnlineScreen} />
                <Tab.Screen name="Оффлайн-игра" component={OfflineScreen} />
                <Tab.Screen name='Профиль' component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}