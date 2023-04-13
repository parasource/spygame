import React from 'react'
import { View, Text } from 'react-native';
import { AppButton } from '../UI/AppButton';

function OnlineScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Online</Text>
            <AppButton>
                Подключиться
            </AppButton>
        </View>
    );
}

export default OnlineScreen;