import React, { useEffect, useState } from "react";
import { View, Alert} from 'react-native'
import { AppButton } from "../UI/AppButton";
import { Card } from "../Card/Card";
import { connect } from 'react-redux';
import { Timer } from "../UI/Timer";

function gameOfflinePage({ navigation, cards, timer}) {
    const [isEnd, setIsEnd] = useState(false)

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
            {isEnd ?
             <View style={{flex: 1, paddingHorizontal: 16, justifyContent: 'center', alignItems: 'center'}} pointerEvents="box-none">
                <Timer minutes={timer}/>
                <AppButton
                    pressHandler={
                        () => exitFromGame()
                    }>
                    Назад
                </AppButton>
            </View>
            :
            <>
                {cards.map((card, index) => (
                    <Card card={card} key={'card' + index} index={index} setIsEnd={setIsEnd} />
                ))}
            </>}
        </View>
    )
}

const mapStateToProps = (state) => ({
	cards: state.game.cards,
	timer: state.game.timer
})

export default connect(mapStateToProps, null)(gameOfflinePage)