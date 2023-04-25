import React from "react";
import { View, Alert } from 'react-native'
import { AppButton } from "../UI/AppButton";
import { Card } from "../Card/Card";
import { useSharedValue } from "react-native-reanimated";

const cards = ['a','a','a','a','a']

export default function EmptyPage({ navigation }) {
    const shuffleBack = useSharedValue(false)

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
            {cards.map((card, index) => (
                <Card card={card} key={index} index={index} shuffleBack={shuffleBack} />
            ))}
            {/* <AppButton
                pressHandler={
                    () => exitFromGame()
                }>
                Назад
            </AppButton> */}
        </View>
    )
}
