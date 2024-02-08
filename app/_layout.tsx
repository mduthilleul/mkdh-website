import FontAwesome from '@expo/vector-icons/FontAwesome'
import {useFonts} from 'expo-font'
import {Link, Slot} from 'expo-router'
import Head from 'expo-router/head'
import {Dimensions, Image, Text, View} from 'react-native'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router'

export default function RootLayout() {
  useFonts({
    Montserrat: require('../assets/fonts/Montserrat-Regular.ttf'),
    ...FontAwesome.font,
  })
  return (
    <>
      <Head>
        <title>MKDH Solutions</title>
      </Head>
      <View
        style={{
          flex: 1,
          backgroundColor: '#365347',
          minHeight: Dimensions.get('window').height,
        }}>
        <Image
          resizeMode="contain"
          source={require('@/assets/images/banner.png')}
          style={{height: 25, alignSelf: 'center', marginTop: 25}}
        />
        <View
          style={{
            flex: 1,
            marginHorizontal: 50,
            marginVertical: 25,
            backgroundColor: 'white',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              padding: 10,
              gap: 10,
            }}>
            <Link href="/">
              <Text style={{fontFamily: 'Montserrat'}}>Home</Text>
            </Link>
            <Link href="/contact">
              <Text style={{fontFamily: 'Montserrat'}}>Contact</Text>
            </Link>
          </View>
          <View style={{flex: 1, paddingHorizontal: 20}}>
            <Slot />
          </View>
        </View>
      </View>
    </>
  )
}
