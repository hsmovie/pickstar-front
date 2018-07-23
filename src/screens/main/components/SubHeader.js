import React, { Component } from 'react'
import { View, Text, Switch } from 'react-native'

class SubHeader extends Component {
  state = {
    isToggleActive: false,
  }

  render() {
    const {
      containerStyle,
      selectBoxStyle,
      toggleContainerStyle,
      textStyle,
      toggleButtonStyle,
      selectBoxContainerStyle,
    } = styles

    return (
      <View style={containerStyle}>
        <View style={selectBoxContainerStyle}>
          <View style={selectBoxStyle}>
            <Text style={textStyle}>남자</Text>
          </View>
          <View style={selectBoxStyle}>
            <Text style={textStyle}>여자</Text>
          </View>
        </View>

        <View style={toggleContainerStyle}>
          <Text style={[textStyle, { marginRight: 10 }]}>
            관심스타만
          </Text>
          <Switch
            style={toggleButtonStyle}
            value={this.state.isToggleActive}
            onValueChange={(value) => this.setState({ isToggleActive: value })}
            onTintColor="#fe5196"
          />
        </View>
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    height: 50,
    alignSelf: 'stretch',

    borderWidth: 1,
    borderColor: '#f4f4f4',
    backgroundColor: '#fff',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  selectBoxContainerStyle: {
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  selectBoxStyle: {
    width: 82,
    borderWidth: 1,
    borderColor: '#f4f4f4',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleContainerStyle: {
    marginRight: 10,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 12,
  },
  toggleButtonStyle: {
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
  },
}

export default SubHeader
