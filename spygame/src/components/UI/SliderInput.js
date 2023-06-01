import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native'
import { Slider } from '@miblanchard/react-native-slider';

export const SliderInput = ({ max, min, initValue, onChangeHandler, label }) => {

    return (
        <>
            {label && <Text style={{ fontSize: 14, marginTop: 20, fontWeight: 700 }}>{label}</Text>}
            <View style={styles.container}>
                <Slider
                    value={initValue}
                    onValueChange={value => onChangeHandler(value)}
                    step={1}
                    maximumValue={max}
                    minimumValue={min}
                />
                <Text>Value: {initValue}</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        justifyContent: 'center',
    },
});
