import React, { useEffect, useState } from "react";
import { View, Alert} from 'react-native'
import { AppButton } from "../UI/AppButton";
import { Card } from "../Card/Card";
import { connect } from 'react-redux';
import { Timer } from "../UI/Timer";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { images } from "../../../assets/images";
import { Image } from 'react-native'

function gameOfflinePage({ navigation, cards, timer}) {
    const [isEnd, setIsEnd] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(cards.length - 1)
		const inserts = useSafeAreaInsets()

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

    const gameOver = () => {
        Alert.alert(
            'Игра окончена',
            'Время вышло',
            [
                {
                    text: 'Выход',
                    style: 'destructive',
                    onPress: () => {
                        navigation.navigate('Home')
                    }
                },
            ]
        )
    }

		const LocationImage = ({CARD_WIDTH}) => <Image
			source={images.locations[cards.find(el => el.role !== 'Шпион').image]}
			resizeMode='cover'
			style={{
				flex: 1,
				width: CARD_WIDTH - 48,
				borderRadius: 8,
				}}
		/>

		const SpyImage = ({CARD_WIDTH}) => <Image source={images.locations.spy} 
			resizeMode='cover'
			style={{
				flex: 1,
				width: CARD_WIDTH - 48,
				borderRadius: 8,
				}}/>

    return (
        <View style={{flex: 1}}>
            {isEnd ?
             <View style={{flex: 1, paddingHorizontal: 16, paddingTop: 150 + inserts.top, paddingBottom: 90 + inserts.bottom, justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff'}} pointerEvents="box-none">
                <Timer minutes={timer} exit={gameOver}/>
                <AppButton
                    pressHandler={
                        () => exitFromGame()
                    }>
                    Завершить досрочно
                </AppButton>
            </View>
            :
            <>
                {cards.map((card, index) => (
                    <Card
                    key = {'card' + index}
										length={cards.length}
										{...{currentIndex,setCurrentIndex, setIsEnd, index, card, LocationImage, SpyImage}}
                    />
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