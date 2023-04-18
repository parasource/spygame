import React from 'react'
import { View, Text } from 'react-native';
import { PlayersCard } from '../UI/PlayersCard';
 
function OnlineScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Online</Text>
            {/* <AppInput/>
            <AppButton>
                Подключиться 
            </AppButton> */}

            <PlayersCard />
        </View>
    );
}

export default OnlineScreen;