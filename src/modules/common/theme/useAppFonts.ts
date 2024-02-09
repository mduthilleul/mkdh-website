import FontAwesome from '@expo/vector-icons/FontAwesome'
import {useFonts} from 'expo-font'

export const useAppFonts = () =>
  useFonts({
    Montserrat: require('./resources/fonts/Montserrat-Regular.ttf'),
    MontserratItalic: require('./resources/fonts/Montserrat-Italic.ttf'),
    MontserratBlack: require('./resources/fonts/Montserrat-Black.ttf'),
    MontserratBlackItalic: require('./resources/fonts/Montserrat-BlackItalic.ttf'),
    MontserratBold: require('./resources/fonts/Montserrat-Bold.ttf'),
    MontserratBoldItalic: require('./resources/fonts/Montserrat-BoldItalic.ttf'),
    MontserratExtraBold: require('./resources/fonts/Montserrat-ExtraBold.ttf'),
    MontserratExtraBoldItalic: require('./resources/fonts/Montserrat-ExtraBoldItalic.ttf'),
    MontserratLight: require('./resources/fonts/Montserrat-Light.ttf'),
    MontserratLightItalic: require('./resources/fonts/Montserrat-LightItalic.ttf'),
    MontserratMedium: require('./resources/fonts/Montserrat-Medium.ttf'),
    MontserratMediumItalic: require('./resources/fonts/Montserrat-MediumItalic.ttf'),
    MontserratSemiBold: require('./resources/fonts/Montserrat-SemiBold.ttf'),
    MontserratSemiBoldItalic: require('./resources/fonts/Montserrat-SemiBoldItalic.ttf'),
    MontserratThin: require('./resources/fonts/Montserrat-Thin.ttf'),
    MontserratThinItalic: require('./resources/fonts/Montserrat-ThinItalic.ttf'),
    ...FontAwesome.font,
  })
