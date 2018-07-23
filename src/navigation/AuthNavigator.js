import { createStackNavigator } from 'react-navigation'
import LoginScreen from '../screens/auth/LoginScreen'
import IntroScreen from '../screens/auth/IntroScreen'
import pickFavoriteStarScreen from '../screens/auth/PickFavoriteStarScreen'

const AuthStack = createStackNavigator({
  intro: IntroScreen,
  login: LoginScreen,
  pickFavoriteStar: pickFavoriteStarScreen,
})

export default AuthStack
