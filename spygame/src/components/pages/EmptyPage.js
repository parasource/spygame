import React, { useEffect, useState } from "react";
import { View, Alert } from 'react-native'
import { AppButton } from "../UI/AppButton";
import { Card } from "../Card/Card";
import { connect } from 'react-redux';

function EmptyPage({ navigation, cards, timer}) {
    const [isEnd, setIsEnd] = useState(null)

    useEffect(() => {
        console.log(isEnd);
    },[isEnd])

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
        <View style={{flex: 1}}>
            {cards.map((card, index) => (
                <Card card={card} key={index} index={index} setIsEnd={setIsEnd} />
            ))}
            {isEnd !== cards.length - 1 && 
            <View style={{flex: 1, paddingHorizontal: 16}} pointerEvents="box-none">
                <AppButton
                    pressHandler={
                        () => exitFromGame()
                    }>
                    Назад
                </AppButton>
            </View>}
        </View>
    )
}

const mapStateToProps = (state) => ({
	cards: state.game.cards,
	timer: state.game.timer
})

export default connect(mapStateToProps, null)(EmptyPage)