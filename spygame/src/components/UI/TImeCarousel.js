import { FontAwesome } from '@expo/vector-icons';
import * as React from 'react';
import { Dimensions, Text, View } from 'react-native';
import { ICarouselInstance } from "react-native-reanimated-carousel";
import Carousel from 'react-native-reanimated-carousel';

export const TimeCarousel = ({ label, onChangeHandler, max, min }) => {
    const width = Dimensions.get('window').width;

    let minutes = []

    for (let i = min; i <= max; i++ ) {
        minutes.push(i)
    }

    return (
        <View>
            {label && <Text style={{ fontSize: 14, marginTop: 20, fontWeight: 700 }}>{label}</Text>}
            <View style={{
                alignItems: 'center',
								marginTop: 16
            }}>
                <Carousel
                    loop={false}
                    width={width / 6}
                    height={30}
                    defaultIndex={0}
                    data={minutes}
                    style={{
                        width: width - 32,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    onSnapToItem={(index) => onChangeHandler(minutes[index])}
                    renderItem={({ index }) => (
                        <View style={{
                            alignSelf: 'center',
                            flexDirection: 'row',
                            justifyContent: 'center'
                        }}>
                            <Text style={{ textAlign: 'center', fontSize: 30}}>
                                {minutes[index]}
                            </Text>
                        </View>
                    )}
                />

                <FontAwesome name='caret-up' size={24} color={'#0069E5'} />
            </View>
        </View >
    );
}