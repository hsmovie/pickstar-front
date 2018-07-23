import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import Header from '../components/Header'

class StarScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  heartStyle(color) {
    const data = this.props.navigation.getParam('data', {})
    const flex = Math.floor(data[color] / (data.redHeart + data.blueHeart) * 100)
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

  render() {
    const data = this.props.navigation.getParam('data', {})
    const rankString = `${data.rank}위`

    const {
      starImageStyle,
      nameBoxStyle,
      nameTextStyle,
      redBlueHeartStyle,
      redBlueHeartCountStyle,
    } = styles

    return (
      <View>
        <Header
          title={rankString}
          star
          style={{ paddingTop: -10, height: 140 }}
        />

        <View style={starImageStyle}>
          <Image />
        </View>

        <View style={nameBoxStyle}>
          <Text style={nameTextStyle}>
            { data.name }
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
            <Text style={{ fontSize: 10 }}>
              { this.numberWithCommas(data.redHeart) }
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require('../../../assets/images/icon.png')}
              style={{ width: 10, height: 10, marginRight: 5 }}
            />
            <Text style={{ fontSize: 10 }}>
              { this.numberWithCommas(data.blueHeart) }
            </Text>
          </View>
        </View>

      </View>
    )
  }
}

const styles = {
  starImageStyle: {
    backgroundColor: '#fff',
    width: 78,
    height: 78,
    borderRadius: 78,
    marginLeft: 30,
    marginTop: -39,

    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  nameBoxStyle: {
    marginLeft: 34,
    marginTop: 15,
  },
  nameTextStyle: {
    fontSize: 18,
  },
  redBlueHeartStyle: {
    flexDirection: 'row',
    marginRight: 33,
    marginLeft: 33,
    marginTop: 8,
  },
  redBlueHeartCountStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    marginTop: 11,
    marginLeft: 33,
    marginRight: 33,
  },
}

export default StarScreen
