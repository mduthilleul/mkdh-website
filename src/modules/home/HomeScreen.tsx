import {Image} from 'react-native'
import {Box} from '../common/theme/Box'
import {Text} from '../common/theme/Text'

export const HomeScreen = () => {
  return (
    <Box gap="$xl" flexDirection="row">
      <Box gap="$lg" flex={1}>
        <Text variant="header">
          Hi 👋,{'\n'}I'm Mika,{'\n'}Fullstack Developer
        </Text>
        <Text>
          I design and develop experiences that make people's lives simpler
          throught Web and Mobile apps. I work with React, React Native,
          Node.js, Flutter and Typescript.
        </Text>
      </Box>
      <Image
        source={require('./resources/mika.jpg')}
        resizeMode="cover"
        style={{width: 300, height: 200, borderRadius: 20, marginTop: 50}}
      />
    </Box>
  )
}
