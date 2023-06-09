import React from "react";
import { StyleSheet, Text, View } from 'react-native'
import { Slider } from '@miblanchard/react-native-slider';

export const SliderInput = ({ max, min, initValue, onChangeHandler, label }) => {

    return (
        <>
            {label &&
                <View style={styles.label_container}>
                    <Text style={{ fontSize: 14, fontWeight: 700 }}>
                        {label}
                    </Text>
                    <Text style={{ fontSize: 14, fontWeight: 700, color: '#757575' }}>
                        Макс.{max}
                    </Text>
                </View>
            }
            <View style={styles.container}>
                <View style={styles.slider_value}>
                    <Text style={{ fontSize: 24, color: '#0069E5', }}>
                        {initValue}
                    </Text>
                </View >
                <Slider
                    value={initValue}
                    onValueChange={value => onChangeHandler(value)}
                    step={1}
                    maximumValue={max}
                    minimumValue={min}
                    containerStyle={{
                        flex: 1,
                    }}
                    thumbStyle={{
                        backgroundColor: '#0069E5',
                        borderColor: '#fff',
                        borderWidth: 5,
                        borderStyle: 'solid',
                        width: 24,
                        height: 24,
                    }}
                    maximumTrackTintColor='#AACCF3'
                    minimumTrackTintColor='#0069E5'
                    trackStyle={{
                        borderRadius: 10,
                        height: 8,
                    }} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#EEEEEE',
        borderLeftColor: '#fff',
        borderRadius: 20,
        paddingRight: 10,
        marginTop: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },

    slider_value: {
        borderRadius: 20,
        width: 44,
        height: 44,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#EEEEEE',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
    },

    label_container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        justifyContent: 'space-between'
    }
});
