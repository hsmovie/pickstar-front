import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import TabBarIcon from '../components/TabBarIcon'
import RankScreen from '../screens/main/RankScreen'
import NewsFeedScreen from '../screens/main/NewsFeedScreen'
import SettingsScreen from '../screens/main/SettingsScreen'

import StarScreen from '../screens/main/rank-stack-screens/StarScreen'

const RankStack = createStackNavigator({
  Rank: RankScreen,
  Star: StarScreen,
})

RankStack.navigationOptions = {
  tabBarLabel: '스타랭킹',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
}

const NewsFeedStack = createStackNavigator({
  NewsFeed: NewsFeedScreen,
})

NewsFeedStack.navigationOptions = {
  tabBarLabel: '새소식',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
}

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
})

SettingsStack.navigationOptions = {
  tabBarLabel: 'My',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
}

const materialBottomTabNavigatorConfig = {
  initialRouteName: 'RankStack',
  activeTintColor: '#ff6791',
  inactiveTintColor: '#3e2465',
  barStyle: { backgroundColor: '#fff' },
}

export default createMaterialBottomTabNavigator({
  RankStack,
  NewsFeedStack,
  SettingsStack,
}, materialBottomTabNavigatorConfig)
