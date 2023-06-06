import React, { useEffect, useState, useRef } from 'react'
import { View, Text, StyleSheet, Animated, Button } from 'react-native';

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

    // fadeAnim will be used as the value for opacity. Initial Value: 0
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const Anim = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: (minutes * 60) * 1000,
            useNativeDriver: true,
        }).start();
    };

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    });

    useEffect(() => {
        Anim()
    }, [])

    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Animated.View
                style={[
                    styles.circle
                ]}
            >
            </Animated.View>

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
        position: 'relative',
        width: 171,
        height: 171,
        borderRadius: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },

    circle: {
        position: 'absolute',
        width: 175,
        height: 175,
        backgroundColor: '#0069E5',
        borderRadius: '100%',
    },
})