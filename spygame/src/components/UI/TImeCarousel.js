import { FontAwesome } from '@expo/vector-icons';
import * as React from 'react';
import { Dimensions, Text, View, StyleSheet} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Carousel from 'react-native-reanimated-carousel';

export const TimeCarousel = ({ label, onChangeHandler, max, min }) => {
    const width = Dimensions.get('window').width;
    let minutes = []
    for (let i = min; i <= max; i++) {
        minutes.push(i)
    }

    return (
        <View>
            {label && <Text style={{ fontSize: 14, marginTop: 20, fontWeight: 700 }}>{label}</Text>}
            <View style={{
                alignItems: 'center',
                marginTop: 16
            }}>
                <LinearGradient
                    colors={['rgba(255,255,255,0)', 'rgba(255,255,255, .8)', 'rgba(255,255,255,1)', 'rgba(255,255,255,1)']}
                    style= {{...styles.background, left: 0}}
                    end={{x: 0, y: 0}}
                >
                </LinearGradient>
                <LinearGradient
                    colors={['rgba(255,255,255,0)','rgba(255,255,255, .8)', 'rgba(255,255,255,1)', 'rgba(255,255,255,1)']}
                    style= {{...styles.background, right: 0, transform: 'rotate(180deg)'}}
                    end={{x: 0, y: 0}}
                >
                </LinearGradient>
                <Carousel
                    loop={false}
                    width={width / 6}
                    height={50}
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
                            justifyContent: 'center',
														paddingVertical: 8
                        }}>
                            <Text style={{ textAlign: 'center', fontSize: 30 }}>
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


const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        width: '50%',
        height: '100%',
        opacity: 1,
        zIndex: 10,
        pointerEvents: 'none',
    }
})