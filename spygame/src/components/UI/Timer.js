import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const Timer = ({ minutes = 0, seconds = 0 }) => {
    const [over, setOver] = useState(false);
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
        <View>
            <Text style={styles.time}>{`${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    time: {
        fontSize: 24,
        color: '#000',
        fontWeight: 700,

    }
})