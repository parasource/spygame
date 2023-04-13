import React from 'react'
import {StyleSheet, View, TouchableOpacity} from 'react-native'

export const AppButton = ({children ,color = '#D9D9D9', style}) => {
    const Wrapper = TouchableOpacity
    return (
        <Wrapper activeOpacity={0.7}>
            <View style={{...styles.button, backgroundColor: color, ...style}}>
                <Text style={styles.text}>
                    {children}
                </Text>
            </View>
        </Wrapper>
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
    }, 
    text: {
        color: 'white'
    }
})