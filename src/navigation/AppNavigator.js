import React, { Component } from 'react'
import { createSwitchNavigator } from 'react-navigation'
import NavigationService from './NavigationService'

import MainTabNavigator from './MainTabNavigator'
import AuthNavigator from './AuthNavigator'
import SplashScreen from '../screens/loading/SplashScreen'

class AppNavigator extends Component {
  render() {
    const navigatorConfig = {
      initialRouteName: 'Auth',
    }

    const RootNavigator = createSwitchNavigator({
      // You could add another route here for authentication.
      // Read more at https://reactnavigation.org/docs/en/auth-flow.html
      Auth: AuthNavigator,
      AuthLoading: { screen: SplashScreen },
      Main: MainTabNavigator,
    }, navigatorConfig)


    return (
      <RootNavigator
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef)
        }}
      />
    )
  }
}

export default AppNavigator
