import React from 'react'
import { View, Text } from 'react-native';
import data from '../../../assets/data/data.json'

function OfflineScreen() {

    const locations = data.locations;

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Оффлайн-игра</Text>
            <View>
                {locations.map(location =>
                    <View>
                        <Text>
                            {location.name}
                        </Text>
                        <Text>
                            {location.roles}
                        </Text>
                    </View>)}
            </View>
        </View>
    );
}

export default OfflineScreen;