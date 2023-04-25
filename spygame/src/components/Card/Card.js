import React, {useCallback, useEffect} from 'react';
import { View, StyleSheet, Image, Dimensions, Text } from 'react-native';
import { images } from '../../../assets/images/index';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import FlipCard from 'react-native-flip-card'
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  useValue,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { snapPoint } from "react-native-redash";

const { width: wWidth, height } = Dimensions.get("window");

const SNAP_POINTS = [-wWidth, 0, wWidth];
const aspectRatio = 600 / 368;
const CARD_WIDTH = wWidth - 128;
const CARD_HEIGHT = CARD_WIDTH * aspectRatio;
const DURATION = 250;

export const Card = ({index, card}) => {
	const offset = useSharedValue({ x: 0, y: 0 });
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(-height);
  const scale = useSharedValue(1);
  const rotateZ = useSharedValue(0);
  const rotateX = useSharedValue(10);
	const delay = index * DURATION;
	const theta = -10 + Math.random() * 10;
	
	useEffect(() => {
    translateY.value = withDelay(
      delay,
      withTiming(index * -5, { duration: DURATION, easing: Easing.inOut(Easing.ease) })
    );
		rotateZ.value = withDelay(delay, withSpring(theta));
  }, [delay, index, rotateZ, theta, translateY]);

  const gesture = Gesture.Pan()
    .onBegin(() => {
      offset.value = { x: translateX.value, y: translateY.value };
      rotateZ.value = withTiming(0);
      scale.value = withTiming(1.1);
    })
    .onUpdate(({ translationX, translationY }) => {
      translateX.value = offset.value.x + translationX;
      translateY.value = offset.value.y + translationY;
    })
    .onEnd(({ velocityX, velocityY }) => {
      const dest = snapPoint(translateX.value, velocityX, SNAP_POINTS);
      translateX.value = withSpring(dest, { velocity: velocityX });
      translateY.value = withSpring(index * -5, { velocity: velocityY });
      scale.value = withTiming(1);
    })

  const style = useAnimatedStyle(() => ({
    transform: [
      { perspective: 1500 },
      { rotateX: `${rotateX.value}deg` },
      { translateX: translateX.value },
      { translateY: translateY.value },
      { rotateY: `${rotateZ.value / 10}deg` },
      { rotateZ: `${rotateZ.value}deg` },
      { scale: scale.value },
    ],
  }));

	return (
		<View style={styles.container} pointerEvents="box-none">
 			<GestureDetector gesture={gesture}>
				<Animated.View style={[styles.card, style]}>
					<FlipCard
					flipHorizontal={true}
					flipVertical={false}
					friction={12}
					style={styles.image}>
						<Image 
							source={images.cardRev}
							resizeMode='contain'
							style={styles.image}
						/>
						<View style={{...styles.image, backgroundColor: '#D5D5FC', justifyContent:'center', alignItems: 'center', borderRadius: 20}}>
							<Text style={{
                fontSize: 20, 
                fontWeight: 'bold', 
                color: '#05052C'}}>Локация: {card.location}</Text>
							<Text style={{
                fontSize: 20, 
                fontWeight: 'bold', 
                color: '#05052C', 
                marginTop: 8}}>Роль: {card.role}</Text>
						</View>
					</FlipCard>
				</Animated.View>
			</GestureDetector>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
	image: {
		width: CARD_WIDTH,
		height: CARD_HEIGHT,
	},
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
		position: 'relative'
  },
})
