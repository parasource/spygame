import React from 'react'
import { Modal, Text, StyleSheet, View, Button } from 'react-native'


export const EditModal = ({ visible, onCancel }) => {
    return (
        <Modal visible={visible} animationType='slide' tpansparent={false}>
            <View style={styles.wrap}>
                <Text>
                    Это модальное окно!
                </Text>
                <Button title='Закрыть' onPress={
                    () => onCancel()
                } />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})