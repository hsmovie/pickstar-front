import React, { Component } from 'react';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { Text, TouchableOpacity } from 'react-native';

class SocialLoginButton extends Component {
  renderSocialLoginButton() {
    const { name } = this.props;
    if (name === 'Facebook') {
      return (
        <Entypo
          size={28}
          name="facebook"
          color="#fff"
        />
      );
    } else if (name === 'Google') {
      return (
        <FontAwesome
          size={28}
          name="google-plus"
          color="#fff"
        />
      );
    }
  }

  render() {
    const { buttonStyle, textStyle } = styles;
    const { onPress, name } = this.props;
    return (
      <TouchableOpacity
        style={[buttonStyle, name === 'Facebook' ? { backgroundColor: '#3B5998' } : { backgroundColor: '#DB4437' }]}
        onPress={onPress}
      >
        { this.renderSocialLoginButton() }
        <Text style={textStyle}>
          { name } 로그인
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = {
  buttonStyle: {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 40,
    paddingRight: 20,
    marginBottom: 10,
    borderRadius: 5,

    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  textStyle: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
    flex: 1,
    textAlign: 'center',
  },
};

export default SocialLoginButton;
