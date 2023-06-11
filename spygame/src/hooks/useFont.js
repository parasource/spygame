import * as Font from "expo-font";
 
const useFonts = async () =>
  await Font.loadAsync({
    'Ysabeau': require('../../assets/fonts/Ysabeau.ttf'),
    'Lato Thin': require('../../assets/fonts/Lato-Thin.ttf'),
    'Lato Light': require('../../assets/fonts/Lato-Light.ttf'),
    'Lato Regular': require('../../assets/fonts/Lato-Regular.ttf'),
    'Lato Bold': require('../../assets/fonts/Lato-Bold.ttf'),
    'Lato Black': require('../../assets/fonts/Lato-Black.ttf'),
  });

  export default useFonts