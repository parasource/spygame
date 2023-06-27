import React, {useCallback, useEffect, useState} from 'react';
import { View, StyleSheet, Image, Dimensions, Text, ImageBackground } from 'react-native';
import { images } from '../../../assets/images/index';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import FlipCard from 'react-native-flip-card'
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { snapPoint } from "react-native-redash";
const { width: wWidth, height } = Dimensions.get("window");

const SNAP_POINTS = [-wWidth, 0, wWidth];
const aspectRatio = 600 / 368;
const CARD_WIDTH = wWidth - 60;
const CARD_HEIGHT = CARD_WIDTH * aspectRatio;
const DURATION = 250;

export const Card = ({setIsEnd, index, card, currentIndex, setCurrentIndex, length, SpyImage, LocationImage}) => {
	const offset = useSharedValue({ x: 0, y: 0 });
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(-height);
  const scale = useSharedValue(1);
  const rotateZ = useSharedValue(0);
  const rotateX = useSharedValue(0);
	const delay = index * DURATION;
	const theta = 0;
	
	const [isFlipped, setIsFlipped] = useState(false)
	const [isLoaded, setIsLoaded] = useState(true)
	
	useEffect(() => {
    translateY.value = withDelay(
      delay,
      withTiming((index - currentIndex) * 10, { duration: DURATION, easing: Easing.inOut(Easing.ease) })
    );
		scale.value = withDelay(delay, withSpring(1 + .02 * (index - currentIndex)));
		rotateZ.value = withDelay(delay, withSpring(theta));
  }, [delay, index, rotateZ, theta, translateY, currentIndex]);

  const gesture = Gesture.Pan()
    .onBegin(() => {
      offset.value = { x: translateX.value, y: translateY.value };
      rotateZ.value = withTiming(0);
    })
    .onUpdate(({ translationX, translationY }) => {
      translateX.value = offset.value.x + translationX;
      translateY.value = offset.value.y + translationY;
    })
    .onEnd(({ velocityX, velocityY }) => {
			const dest = snapPoint(translateX.value, velocityX, SNAP_POINTS);
      translateX.value = withSpring(dest, { velocity: velocityX });
      translateY.value = withSpring(index * -5, { velocity: velocityY });
      scale.value = withTiming(1, {}, () => {
        const isLast = index === 0;
        const isSwipedLeftOrRight = dest !== 0;
        if (isLast && isSwipedLeftOrRight) {
          runOnJS(setIsEnd)(true)
        }
				if(isSwipedLeftOrRight){
					runOnJS(setCurrentIndex)(index - 1)
				}
      });
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
 			<GestureDetector gesture={gesture} enabled={false}>
				<Animated.View style={[styles.card, style]}>
					<FlipCard
					flipHorizontal={true}
					flipVertical={false}
					friction={12}
					style={styles.image}
					onFlipEnd={() => setIsFlipped(true)}>
						<View style={styles.cardReverse}>
								{(currentIndex === index) && 
								<><Text style={{
										fontSize: 28, 
										lineHeight: 32,
										textAlign: 'center',
										fontWeight: 'bold', 
										color: '#000000'}}>{isFlipped ? 'Свайпните карту и передай телефон' : 'Переверни карту'}</Text>
								<ImageBackground
									source={images.cardRev}
									resizeMode='contain'
									style={{
										width: CARD_WIDTH - 60,
										height: CARD_HEIGHT,
										position: 'absolute'}}
								/>
								<Text style={{
                fontSize: 20, 
                color: '#2F2F56',
								fontFamily: 'Lato Regular'}}>{length - index} из {length}</Text>
								</>}
						</View>
						<View style={styles.cardContent}>
							{card.role === 'Шпион' ? 
							<> 
								<SpyImage {...{CARD_WIDTH}}/>
								<View style={{flex: .5}}>
									<Text style={styles.spySmall}>Сделай вид, типа что то читаешь...</Text>
								</View>
							</>
							: 
							<>
							<LocationImage {...{CARD_WIDTH}}/>
							<Text style={styles.cardLabel}>Локация:</Text>
							<Text style={styles.cardValue}>{card.location}</Text>
							<Text style={styles.cardLabel}>Роль: </Text>
							<Text style={styles.cardValue}>{card.role}</Text>
							</>}
							<Text style={styles.smallText}>Нажми на карточку, чтобы скрыть её</Text>
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
    color: '#05052C'
	},
	cardContent: {
		width: CARD_WIDTH,
		height: CARD_HEIGHT,
		backgroundColor: '#fff',
		borderRadius: 20,
		padding: 24,
		paddingBottom: 48
	},
	cardReverse: {
		width: CARD_WIDTH,
		height: CARD_HEIGHT,
		backgroundColor: '#fff',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderRadius: 20,
		paddingVertical: 32
	},
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
		position: 'relative',
		shadowColor: '#0077B6',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.12,
    shadowRadius: 12,
  },
	cardLabel: {
		fontSize: 20, 
		fontFamily: 'Lato Bold',
		color: '#000000', 
		marginTop: 16
	},
	cardValue: {
		fontSize: 16, 
		fontFamily: 'Lato Regular',
		color: '#000000',
		marginTop: 8
	},
	spyTitle: {
		fontSize: 40, 
		fontFamily: 'Ysabeau',
		fontWeight: '800',
		marginTop: 32,
		textAlign: 'center'
	},
	spySmall: {
		fontSize: 14, 
		fontFamily: 'Lato Regular',
		marginTop: 16,
		textAlign: 'center',
	},
	spyLocation: {
		fontSize: 40, 
		fontFamily: 'Ysabeau',
		fontWeight: '800',
		color: '#fff',
	},
	smallText: {
		position: 'absolute',
		bottom: 24,
		fontSize: 14, 
		fontFamily: 'Lato Regular',
		color: '#888888',
		textAlign: 'center',
		width: '100%',
		left: 24,
	}
})
