import FontAwesome from '@expo/vector-icons/FontAwesome'
import {useFonts} from 'expo-font'
import {Link, Slot} from 'expo-router'
import Head from 'expo-router/head'
import {Image, ScrollView, Text, View} from 'react-native'

export const Layout = () => {
  useFonts({
    Montserrat: require('./resources/Montserrat-Regular.ttf'),
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
        }}>
        <Image
          resizeMode="contain"
          source={require('@/modules/common/layout/resources/banner.png')}
          style={{height: 25, alignSelf: 'center', marginTop: 25}}
        />
        <View
          style={{
            flex: 1,
            marginHorizontal: 50,
            marginVertical: 25,
            backgroundColor: 'white',
          }}>
          <ScrollView>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                padding: 10,
                gap: 10,
                position: 'absolute',
                right: 0,
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
          </ScrollView>
        </View>
      </View>
    </>
  )
}
