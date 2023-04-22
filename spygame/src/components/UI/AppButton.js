import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'

export const AppButton = ({ children, color = '#D9D9D9', style, pressHandler }) => {
    return (
        <TouchableOpacity
            onPress={pressHandler}
            activeOpacity={0.7}
            style={{ ...styles.button, backgroundColor: color, ...style }}>
            <Text style={styles.text}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 32
    },
    text: {
        color: 'black',
        fontWeight: 'bold'
    }
})