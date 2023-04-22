import React from 'react'
import { View } from 'react-native';
import {PlayersCard} from '../UI/PlayersCard';
import {AppInput} from '../UI/AppInput';
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