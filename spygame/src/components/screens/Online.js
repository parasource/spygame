import React from 'react'
import { View } from 'react-native';
import {AppButton} from '../UI/AppButton';
 
function OnlineScreen() {
    return (
        <View style={{ flex: 1, paddingHorizontal: 16}}>
            <AppButton>
                Подключиться 
            </AppButton>
        </View>
    );
}

export default OnlineScreen;