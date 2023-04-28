import React, {useState} from 'react'
import { View } from 'react-native';
import { AppInput } from '../UI/AppInput';
import { TimeInput } from '../UI/TimeInput';
import { AppButton } from '../UI/AppButton';
import { connect } from 'react-redux';
import { createOfflineGame } from '../../store/gameReducer';

function OfflineScreen({createOfflineGame, navigation}) {
    const [playersCount, setPlayersCount] = useState(2)
    const [spiesCount, setSpiesCount] = useState(1)
    const [timer, setTimer] = useState(5)

    const startGameEvent = () => {
        createOfflineGame({playersCount, spiesCount, timer})
        navigation.navigate('Offline-game')
    }

    return (
        <View style={{ flex: 1, paddingHorizontal: 16 }}>
            <AppInput label={'Количество игроков'} 
                        placeholder='0' 
                        type='counter' 
                        onChangeHandler={setPlayersCount} 
                        initValue={playersCount} 
                        max={15} min={2}/>
            <AppInput label={'Количество шпионов'} 
                        placeholder='0' 
                        type='counter' 
                        initValue={spiesCount} 
                        onChangeHandler={setSpiesCount} 
                        max={Math.floor(playersCount/2)} min={1}/>
            <TimeInput label={'Время игры'} 
                        initValue={timer}
                        onChangeHandler={setTimer} 
                        max={25} min={5}/>
            <AppButton pressHandler={startGameEvent}>
                Начать игру
            </AppButton>
        </View>
    );
}

export default connect(null, {createOfflineGame})(OfflineScreen);