import React, { Component } from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import NavigationService from '../../../navigation/NavigationService'

class RankCardItem extends Component {
  heartStyle(color) {
    const { redHeart, blueHeart } = this.props.ranking.item
    const flex = Math.floor(this.props.ranking.item[color] / (redHeart + blueHeart) * 100)
    return {
      backgroundColor: color === 'redHeart' ? '#ff6791' : '#84abf3',
      flex,
      height: 5,
    }
  }

  numberWithCommas(number) {
    if (number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  }

  onPress() {
    NavigationService.navigate('Star', { data: this.props.ranking.item })
  }

  render() {
    const {
      containerStyle,
      imageStyle,
      heartContainerStyle,
      nameAndTotalHeartStyle,
      redBlueHeartStyle,
      redBlueHeartCountStyle,
    } = styles

    const { rank, name, redHeart, blueHeart } = this.props.ranking.item
    return (
      <TouchableWithoutFeedback onPress={() => this.onPress()} style={{ alignSelf: 'stretch' }}>
        <View style={containerStyle}>
          <Text style={{ width: 30, textAlign: 'center' }}>{ rank }위</Text>

          <Image
            source={require('../../../assets/images/icon.png')}
            style={imageStyle}
          />

          <View style={heartContainerStyle}>
            <View style={nameAndTotalHeartStyle}>
              <Text style={{ fontSize: 14, marginRight: 10, width: 80 }}>
                {name.length > 4 ? `${name.substring(0, 4)}...` : name }
              </Text>
              <Image
                source={require('../../../assets/images/icon.png')}
                style={{ width: 10, height: 10, marginRight: 5 }}
              />
              <Text style={{ fontSize: 8 }}>
                {this.numberWithCommas(redHeart + blueHeart)}
              </Text>
            </View>

            <View style={redBlueHeartStyle}>
              <View style={this.heartStyle('redHeart')} />
              <View style={this.heartStyle('blueHeart')} />
            </View>

            <View style={redBlueHeartCountStyle}>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  source={require('../../../assets/images/icon.png')}
                  style={{ width: 10, height: 10, marginRight: 5 }}
                />
                <Text style={{ fontSize: 8 }}>
                  { this.numberWithCommas(redHeart) }
                </Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  source={require('../../../assets/images/icon.png')}
                  style={{ width: 10, height: 10, marginRight: 5 }}
                />
                <Text style={{ fontSize: 8 }}>
                  { this.numberWithCommas(blueHeart) }
                </Text>
              </View>
            </View>

          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  containerStyle: {
    height: 80,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingLeft: 27,
    paddingRight: 27,
    marginTop: 10,

    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  imageStyle: {
    height: 46,
    width: 46,
    marginLeft: 10,
    marginRight: 20,
  },
  heartContainerStyle: {
    flex: 1,
    height: 46,
    justifyContent: 'space-between',
  },
  nameAndTotalHeartStyle: {
    flexDirection: 'row',
  },
  redBlueHeartStyle: {
    flexDirection: 'row',
  },
  redBlueHeartCountStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
}

export default RankCardItem
