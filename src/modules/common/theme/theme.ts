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
    $2xl: 50,
  },
  textVariants: {
    header: {
      fontWeight: 900,
      fontSize: 48,
      fontFamily: 'MontserratBold',
      color: '$primary',
    },
    body: {
      fontSize: 16,
    },
    link: {
      fontSize: 18,
      fontFamily: 'MontserratBold',
      color: '$primary',
    },
    defaults: {
      fontFamily: 'Montserrat',
      color: '$text',
      fontSize: 16,
    },
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
    desktop: 1024,
  },
})

export type Theme = typeof theme
export default theme
