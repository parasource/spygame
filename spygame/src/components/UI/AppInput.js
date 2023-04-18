import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

export const AppInput = ({ style }) => {
    const [value, setValue] = useState('')

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value)
            setValue('')
            Keyboard.dismiss()
        } else {
            Alert.alert('Название дела не может быть пустым')
        }
    }
    return (
        <View style={{ width: '100%' }}>
            <TextInput
                style={{ ...styles.input, ...style }}
                onChangeText={text => setValue(text)}
                value={value}
                placeholder='Введите ID комнаты'
            />

            <FontAwesome name="circle" size={20} color="#D9D9D9" style={styles.circle} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        position: 'relative',
        width: '100%',
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 12,
        backgroundColor: '#FAFAFA'
    },
    circle: {
        position: 'absolute',
        right: 16,
        bottom: 10,
    }
})