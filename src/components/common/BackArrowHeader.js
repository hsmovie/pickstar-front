import React, { Component } from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import { LinearGradient } from 'expo'
import { MaterialIcons } from '@expo/vector-icons'
import NavigationService from '../../navigation/NavigationService'

class BackArrowHeader extends Component {
  render() {
    const {
      containerStyle,
      backArrowIconStyle,
      textStyle,
    } = styles

    const {
      firstLineText,
      secondLineText,
      style,
    } = this.props
    return (
      <LinearGradient colors={['#f77062', '#fe5196']} style={[containerStyle, style]}>
        <View>
          <TouchableWithoutFeedback
            onPress={() => NavigationService.goBack()}
          >
            <MaterialIcons
              name="arrow-back"
              size={24}
              style={backArrowIconStyle}
            />
          </TouchableWithoutFeedback>
          <Text style={[textStyle, { marginTop: 10 }]}>{firstLineText}</Text>
          <Text style={textStyle}>{secondLineText}</Text>
        </View>
      </LinearGradient>
    )
  }
}

const styles = {
  containerStyle: {
    alignSelf: 'stretch',
    height: 180,
  },
  backArrowIconStyle: {
    marginTop: 48,
    marginLeft: 21,
    width: 26,
    color: '#fff',
  },
  textStyle: {
    fontSize: 22,
    color: '#fff',
    marginLeft: 30,
    fontWeight: '500',
  },
}

export { BackArrowHeader }
