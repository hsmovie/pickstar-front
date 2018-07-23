import React, { Component } from 'react'
import { View, Text, Platform, TouchableWithoutFeedback } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo'
import NavigationService from '../../../navigation/NavigationService'

class Header extends Component {
  renderLeftSideButton() {
    const { main, star } = this.props
    const { iconStyle } = styles
    let icon
    let onPressFunction
    if (main) {
      icon = Platform.OS === 'ios'
        ? 'ios-notifications-outline'
        : 'md-notifications-outline'
      onPressFunction = () => NavigationService.navigate('Auth')
    } else if (star) {
      icon = Platform.OS === 'ios'
        ? 'ios-arrow-round-back'
        : 'md-arrow-back'
      onPressFunction = () => NavigationService.goBack()
    }
    return (
      <TouchableWithoutFeedback
        onPress={onPressFunction}
      >
        <Ionicons
          style={iconStyle}
          name={icon}
          size={24}
        />
      </TouchableWithoutFeedback>
    )
  }

  renderRightSideButton() {
    const { main, star } = this.props
    const { iconStyle,
      rightSideButtonsStyle,
    } = styles

    let firstIcon = ''
    let secondIcon = ''
    if (main) {
      firstIcon = Platform.OS === 'ios'
        ? 'ios-heart-outline'
        : 'md-heart-outline'
      secondIcon = Platform.OS === 'ios'
        ? 'ios-search'
        : 'md-search'
    } else if (star) {
      firstIcon = Platform.OS === 'ios'
        ? 'ios-star-outline'
        : 'md-star-outline'
      return (
        <View style={[rightSideButtonsStyle, { justifyContent: 'flex-end' }]}>
          <Ionicons
            style={{ alignSelf: 'flex-end' }}
            name={firstIcon}
            size={24}
          />
        </View>
      )
    }
    return (
      <View style={rightSideButtonsStyle}>
        <Ionicons
          style={iconStyle}
          name={firstIcon}
          size={24}
        />
        <Ionicons
          style={iconStyle}
          name={secondIcon}
          size={24}
        />
      </View>
    )
  }

  render() {
    const {
      containerStyle,
      textStyle,
      leftSideButtonsStlye,
    } = styles

    const {
      title,
      style,
      // main,
    } = this.props

    return (
      <LinearGradient colors={['#f77062', '#fe5196']} style={[containerStyle, style]}>
        <View style={leftSideButtonsStlye}>
          { this.renderLeftSideButton() }
        </View>

        <Text style={textStyle}>
          { title }
        </Text>

        { this.renderRightSideButton() }

      </LinearGradient>
    )
  }
}

const styles = {
  containerStyle: {
    height: 90,
    backgroundColor: '#fe5196',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 25,
    paddingLeft: 30,
    paddingRight: 30,
  },
  leftSideButtonsStlye: {
    width: 60,
  },
  textStyle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '400',
    width: 100,
    textAlign: 'center',
  },
  rightSideButtonsStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 60,
  },
  iconStyle: {
  },
}

export default Header
