import React from 'react'
import { View, Text } from 'react-native';
import { AppInput } from '../UI/AppInput'
import { AppButton } from '../UI/AppButton';
 
function OnlineScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Online</Text>
            {/* <AppInput/>
            <AppButton>
                Подключиться 
            </AppButton> */}
        </View>
    );
}

export default OnlineScreen;