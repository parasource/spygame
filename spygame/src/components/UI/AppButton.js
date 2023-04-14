import React from 'react'
import {StyleSheet, View, TouchableOpacity, Text, Dimensions} from 'react-native'

export const AppButton = ({children ,color = '#D9D9D9', style}) => {
    return (
        <TouchableOpacity activeOpacity={0.7}>
            <View style={{...styles.button, backgroundColor: color, ...style}}>
                <Text style={styles.text}>
                    {children}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: Dimensions.get('window').width,
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    text: {
        color: 'black',
        fontWeight: 'bold'
    }
})