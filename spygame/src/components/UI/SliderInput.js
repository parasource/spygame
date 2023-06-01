import React from "react";
import { StyleSheet, Text, View } from 'react-native'
import { Slider } from '@miblanchard/react-native-slider';
import { FontAwesome } from '@expo/vector-icons';

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
                    <Text style={{ fontSize: 24, color: '#fff', }}>
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
                        borderColor: '#CBE3FF',
                        borderWidth: 10,
                        borderRadius: 10,
                        borderStyle: 'solid',
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

                    minimumTrackTintColor='#62AAFF'

                    trackStyle={{
                        borderRadius: 10,
                        height: 19,
                    }}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },

    slider_value: {
        borderRadius: 20,
        paddingHorizontal: 14,
        paddingVertical: 7,
        backgroundColor: '#0069E5',
        marginRight: 5,
    },

    label_container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        justifyContent: 'space-between'
    }
});
