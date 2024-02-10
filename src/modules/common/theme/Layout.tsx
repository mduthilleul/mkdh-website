import {ThemeProvider} from '@shopify/restyle'
import {Slot} from 'expo-router'
import Head from 'expo-router/head'
import {Image, Linking, Pressable, ScrollView} from 'react-native'
import {Box} from './Box'
import {Text} from './Text'
import theme from './theme'
import {useAppFonts} from './useAppFonts'

export const Layout = () => {
  useAppFonts()
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
        <Box
          flex={1}
          my="$lg"
          mx="$lg"
          bg="$background"
          alignSelf="center"
          maxWidth={900}
          maxHeight={400}>
          <ScrollView>
            <Box
              zIndex={2}
              flexDirection="row"
              justifyContent="center"
              position="absolute"
              padding="$sm"
              gap="$sm"
              right={0}>
              <Pressable
                onPress={() => Linking.openURL('mailto:contact@mkdh.fr')}>
                <Text variant="link">Contact</Text>
              </Pressable>
            </Box>
            <Box flex={1} px="$lg" pt="$2xl">
              <Slot />
            </Box>
          </ScrollView>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
