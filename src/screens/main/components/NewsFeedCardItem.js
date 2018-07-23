import React, { Component } from 'react'
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'

class NewsFeedCardItem extends Component {
  render() {
    const {
      containerStyle,
      firstRowBoxStyle,
      nameAndDateBoxStyle,
      imageStyle,
      levelBoxStyle,
    } = styles

    const { item } = this.props
    return (
      <TouchableWithoutFeedback>
        <View style={containerStyle}>
          <View style={firstRowBoxStyle}>
            <View style={imageStyle}>
              <Image />
            </View>
            <View style={nameAndDateBoxStyle}>
              <Text style={{ fontSize: 13, marginBottom: 2 }}>{item.writer}</Text>
              <Text style={{ fontSize: 12, color: '#9b9b9b' }}>{item.date}</Text>
            </View>
            <View style={levelBoxStyle}>
              <Text style={{ fontSize: 12, color: '#9b9b9b' }}>| Lv. {item.level}</Text>
              <Text />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  containerStyle: {
    height: 310,
    backgroundColor: '#fff',
    marginTop: 8,

    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    paddingTop: 22,
    paddingBottom: 22,
    paddingLeft: 30,
  },
  firstRowBoxStyle: {
    flexDirection: 'row',
  },
  imageStyle: {
    width: 45,
    height: 45,
    borderRadius: 45,
    backgroundColor: '#fff',

    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  nameAndDateBoxStyle: {
    width: 70,
    justifyContent: 'center',
    marginLeft: 10,
  },
  levelBoxStyle: {
    justifyContent: 'center',
  },
}

export default NewsFeedCardItem
