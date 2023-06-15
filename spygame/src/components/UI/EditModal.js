import React from 'react'
import { Modal, Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { AppButton } from './AppButton';

export const EditModal = ({ visible, onCancel, timer, editTimer, max, min }) => {
    return (
        <Modal visible={visible} animationType='slide' tpansparent={false}>
            <View style={styles.wrap}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <TouchableOpacity>
                        <FontAwesome name="minus-square" size={32} color="#0069E5" onPress={() => editTimer(prev => {
                            if (+prev > min) {
                                return +prev - 1
                            } else {
                                return prev
                            }
                        })} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 24, marginRight: 10, marginLeft: 10 }}>
                        {timer} мин
                    </Text>
                    <TouchableOpacity >
                        <FontAwesome name="plus-square" size={32} color="#0069E5" onPress={() => editTimer(prev => {
                            if (+prev < max) {
                                return +prev + 1
                            } else {
                                return prev
                            }
                        })} />
                    </TouchableOpacity>

                </View>
                <AppButton pressHandler = {
                    () => onCancel()
                }>
                    Закрыть
                </AppButton>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    wrap: {
        paddingHorizontal: 16,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})