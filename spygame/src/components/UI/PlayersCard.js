import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export const PlayersCard = () => {

    const img = 'https://reactnative.dev/img/tiny_logo.png'

    const players = [
        <Image
            style={styles.playerImg}
            source={{
                uri: img,
            }}
        />,
        <Image
            style={styles.playerImg}
            source={{
                uri: img,
            }}
        />,
        <Image
            style={styles.playerImg}
            source={{
                uri: img,
            }}
        />,
        <Image
            style={styles.playerImg}
            source={{
                uri: img,
            }}
        />
    ]

    let content = (
        <View style={styles.players}>
            <View style={styles.playersList}>
                {players.map(item => item)}
            </View>
            <Text style={styles.playersCount}>
                {players.length} из 6
            </Text>
        </View>
    )

    if (players.length === 0) {
        content = (
            <View style={{...styles.players, justifyContent: 'center'}}>
                <Text style={styles.nothingText}>
                    Пока никого нет
                </Text>
            </View>
        )
    }

    return (
        content
    )
}


const styles = StyleSheet.create({
    players: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 19,
        paddingVertical: 12,
        backgroundColor: '#FAFAFA',
        borderRadius: 12,
    },
    playersList: {
        flexDirection: 'row',
    },
    playersCount: {
        color: '#888'
    },
    playerImg: {
        width: 32,
        height: 32,
        marginRight: 4,
    },
    nothingText: {
        color: '#888'
    }
})