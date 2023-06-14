import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

export const TimeInput = ({ style, label, initValue, max, min, onChangeHandler, onChangeModal}) => {

    return (
        <>
            {label && <Text style={{fontSize: 14, marginTop: 20, fontWeight: 700}}>{label}</Text>}
            <View style={styles.inputWrapper}>
                <Text style={{ ...styles.input, ...style }}>{initValue + ':00 минут'}</Text>
                <TouchableOpacity onPress={
                    () => {
                        onChangeModal(true)
                    }
                }>
                    <Text style={{color: 'grey', fontSize: 14}}>
                        Изменить
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    inputWrapper: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 12,
        backgroundColor: '#FAFAFA',
        width: '100%', 
        marginTop: 8, 
        flexDirection: 'row', 
        alignItems: 'center'
    },
    input: {
        color: '#0069E5',
        flex: 1,
        fontWeight: 700,
        fontSize: 16,
    },
    circle: {
        marginLeft: 12
    }
})