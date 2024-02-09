import FontAwesome from '@expo/vector-icons/FontAwesome'
import {ThemeProvider} from '@shopify/restyle'
import {useFonts} from 'expo-font'
import {Link, Slot} from 'expo-router'
import Head from 'expo-router/head'
import {Image, ScrollView} from 'react-native'
import {Box} from './Box'
import {Text} from './Text'
import theme from './theme'

export const Layout = () => {
  useFonts({
    Montserrat: require('./resources/Montserrat-Regular.ttf'),
    ...FontAwesome.font,
  })
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>MKDH Solutions</title>
      </Head>
      <Box flex={1} bg="$primary">
        <Image
          resizeMode="contain"
          source={require('@/modules/common/theme/resources/banner.png')}
          style={{height: 25, alignSelf: 'center', marginTop: 25}}
        />
        <Box flex={1} mx="$xl" my="$lg" bg="$background">
          <ScrollView>
            <Box
              zIndex={2}
              flexDirection="row"
              justifyContent="center"
              position="absolute"
              padding="$sm"
              gap="$sm"
              right={0}>
              <Link href="/">
                <Text>Home</Text>
              </Link>
              <Link href="/contact">
                <Text>Contact</Text>
              </Link>
            </Box>
            <Box flex={1} px="$lg" pt="$lg">
              <Slot />
            </Box>
          </ScrollView>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
