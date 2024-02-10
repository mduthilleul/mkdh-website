import {ThemeProvider} from '@shopify/restyle'
import {Link, Slot} from 'expo-router'
import Head from 'expo-router/head'
import {Box} from './Box'
import {Text} from './Text'
import theme from './theme'
import {useAppFonts} from './useAppFonts'
require('./resources/banner.png')

export const Layout = () => {
  useAppFonts()
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>MKDH Solutions</title>
      </Head>
      <Box flex={1} bg="$primary">
        <img
          src="./assets/src/modules/common/theme/resources/banner.df7ad9511f8dd303ec0447379be61481.png"
          style={{height: 25, alignSelf: 'center', marginTop: 25}}
        />
        <Box
          flex={1}
          my="$lg"
          mx="$lg"
          bg="$background"
          alignSelf="center"
          maxWidth={900}>
          <Box
            zIndex={2}
            flexDirection="row"
            justifyContent="center"
            position="absolute"
            padding="$sm"
            gap="$sm"
            right={0}>
            <Link href="mailto:contact@mkdh.fr">
              <Text variant="link">Contact</Text>
            </Link>
          </Box>
          <Box flex={1} px="$lg" py="$2xl">
            <Slot />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
