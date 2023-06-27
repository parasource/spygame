import React, { useState } from 'react'
import { View, Text } from 'react-native';
import { AppButton } from '../UI/AppButton';
import { connect } from 'react-redux';
import { createOfflineGame } from '../../store/gameReducer';
import { SliderInput } from '../UI/SliderInput';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TimeCarousel } from '../UI/TImeCarousel';
import { useEffect } from 'react';

function OfflineScreen({ createOfflineGame, navigation }) {
    const [playersCount, setPlayersCount] = useState(2)
    const [spiesCount, setSpiesCount] = useState(1)
    const [timer, setTimer] = useState(5)
    const inserts = useSafeAreaInsets()

    const startGameEvent = () => {
        createOfflineGame({ playersCount, spiesCount, timer })
        navigation.navigate('Offline-game')
    }

		useEffect(() => {
			console.log(spiesCount);
		}, [spiesCount])

    return (
        <View style={{ flex: 1, paddingHorizontal: 16, backgroundColor: '#fff' }}>
            <Text style={{
                fontFamily: 'Ysabeau',
                fontStyle: 'normal',
                fontWeight: 800,
                fontSize: 44,
                color: '#000000',
                lineHeight: 48,
                marginTop: 40 + inserts.top
            }}>
                Создание игры
            </Text>
            <SliderInput label={'Количество игроков'}
                onChangeHandler={setPlayersCount}
                initValue={playersCount}
                max={10} min={3} />
            <SliderInput label={'Количество шпионов'}
                initValue={spiesCount}
                onChangeHandler={setSpiesCount}
                max={Math.floor(playersCount / 2)} min={1} />
            <TimeCarousel
                label={'Время игры (в минутах)'}
                onChangeHandler={setTimer}
                max={10} min={5}
            />
            <AppButton pressHandler={startGameEvent}>
                Начать игру
            </AppButton>
        </View>
    );
}

export default connect(null, { createOfflineGame })(OfflineScreen);