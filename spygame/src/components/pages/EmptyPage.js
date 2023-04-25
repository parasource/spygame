import React from "react";
import { View, Alert } from 'react-native'
import { AppButton } from "../UI/AppButton";

export default function EmptyPage({ navigation }) {

    const exitFromGame = () => {
        Alert.alert(
            'Выход из игры',
            'Вы уверены?',
            [
                {
                    text: 'Да',
                    style: 'destructive',
                    onPress: () => {
                        navigation.navigate('Home')
                    }
                },
                {
                    text: 'Нет',
                    style: 'cancel'
                }
            ]
        )
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <AppButton
                pressHandler={
                    () => exitFromGame()
                }>
                Назад
            </AppButton>
        </View>
    )
}
