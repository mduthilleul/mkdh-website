import {createTheme} from '@shopify/restyle'

const palette = {
  green: '#365347',
  black: '#0E0E0E',
  white: '#F1F1F1',
}

const theme = createTheme({
  colors: {
    $primary: palette.green,
    $background: palette.white,
    $text: palette.black,
  },
  spacing: {
    $sm: 8,
    $md: 16,
    $lg: 24,
    $xl: 40,
  },
  textVariants: {
    header: {
      fontWeight: 'bold',
      fontSize: 34,
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
    },
    defaults: {
      fontFamily: 'Montserrat',
      color: '$text',
    },
  },
})

export type Theme = typeof theme
export default theme
