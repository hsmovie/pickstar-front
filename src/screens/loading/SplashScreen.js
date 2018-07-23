import React, { Component } from 'react'
import { Text } from 'react-native'
import { LinearGradient } from 'expo'

class SplashScreen extends Component {
  render() {
    const { containerStyle, textStyle } = styles
    return (
      <LinearGradient colors={['#f77062', '#fe5196']} style={containerStyle}>
        <Text style={textStyle}>
          PICKSTAR
        </Text>
      </LinearGradient>
    )
  }
}

const styles = {
  containerStyle: {
    backgroundColor: '#fe5196',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 21,
    color: '#fff',
    fontWeight: '400',
  },
}

export default SplashScreen
