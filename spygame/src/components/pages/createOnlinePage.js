import React from 'react'
import { View, Text } from 'react-native';
import { AppButton } from '../UI/AppButton';
import { NetworkConsumer } from 'react-native-offline';

function OnlineScreen() {
    return (
        <View style={{
            flex: 1, paddingHorizontal: 16, alignItems: 'center',
        }}>
            <NetworkConsumer>
                {({ isConnected }) =>
                    isConnected ? (
                        <AppButton>
                            Подключиться
                        </AppButton>
                    ) : (
                        <Text>
                            Нет подключения к сети
                        </Text>
                    )
                }
            </NetworkConsumer>
        </View>
    );
}

export default OnlineScreen;