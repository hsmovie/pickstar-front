import React, { Component } from 'react';
import { View, Dimensions, Text } from 'react-native';

class StarItem extends Component {
  render() {
    const {
      containerStyle,
      circleStyle,
      textStyle,
    } = styles;

    const {
      name,
    } = this.props.rankData.item;

    return (
      <View style={containerStyle}>
        <View style={circleStyle} />
        <Text style={textStyle}>
          {name.length > 4 ? `${name.substring(0, 4)}...` : name }
        </Text>
      </View>
    );
  }
}

const dimensionWidthSize = Dimensions.get('window').width / 3;
const innerCircleSize = dimensionWidthSize / 1.5;

const styles = {
  containerStyle: {
    width: dimensionWidthSize,
    height: dimensionWidthSize,
    // justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
  },
  circleStyle: {
    width: innerCircleSize,
    height: innerCircleSize,
    borderRadius: innerCircleSize,
    backgroundColor: 'pink',
  },
  textStyle: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
  },
};

export default StarItem;
