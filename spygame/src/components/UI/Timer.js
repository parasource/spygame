import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

export const Timer = ({ minutes = 0, seconds = 0, exit}) => {
    const [over, setOver] = useState(false);
    const [value, setValue] = useState(0)
    const [[m, s], setTime] = useState([minutes, seconds]);

    const tick = () => {
        if (m === 0 && s === 0) {
            setOver(true);
        } else if (s == 0) {
            setTime([m - 1, 59]);
        } else {
            setTime([m, s - 1]);
        }
    };
    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    });


    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <CircularProgress
                radius={90}
                value={100}
                duration={(minutes * 60 * 1000)}
                onAnimationComplete={() => {
                    setValue(100)
                    exit()
                }}
                inActiveStrokeColor='#EEEEEE'
                activeStrokeColor='#0069E5'
                inActiveStrokeWidth={4}
                activeStrokeWidth={4}
            />
            <View style={styles.time_wrapper}>
                <Text style={styles.time}>{`${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    time: {
        fontSize: 24,
        color: '#000',
        fontWeight: 700,
    },

    time_wrapper: {
        width: 100,
        height: 100,
        backgroundColor: '#fff',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
				fontFamily: 'Lato Bold'
    },
})