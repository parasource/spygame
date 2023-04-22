import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

export const TimeInput = ({ style, label, initValue, max, min }) => {
    const [value, setValue] = useState(initValue)

    return (
        <>
            {label && <Text style={{fontSize: 14, marginTop: 20, fontWeight: 700}}>{label}</Text>}
            <View style={styles.inputWrapper}>
                <Text style={{ ...styles.input, ...style }}>{value + ':00 мин'}</Text>
                <TouchableOpacity>
                        <FontAwesome name="minus-square" size={24} color="#D9D9D9" style={styles.circle} onPress={() => setValue(prev => {
                                if(+prev > min){
                                        return +prev - 1
                                }else{
                                        return prev
                                    }
                        })}/>
                </TouchableOpacity>
                <TouchableOpacity>
                        <FontAwesome name="plus-square" size={24} color="#D9D9D9" style={styles.circle} onPress={() => setValue(prev => {
                                    if(+prev < max){
                                        return +prev + 1
                                    }else{
                                        return prev
                                    }
                        })}/>
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
        flex: 1
    },
    circle: {
        marginLeft: 12
    }
})