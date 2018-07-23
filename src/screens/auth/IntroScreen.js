import React, { Component } from 'react'
import { LinearGradient } from 'expo'
import { View, Text, Image } from 'react-native'
import NavigationService from '../../navigation/NavigationService'
import {
  ButtonWithoutFeedback,
  ConfirmModal,
} from '../../components/common'

class IntroScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  state = {
    modalVisible: false,
  }

  openConfirmModal(sign) {
    this.setState({ modalVisible: sign })
  }

  closeConfirmModal() {
    this.setState({ modalVisible: false })
  }

  moveToLogin() {
    this.closeConfirmModal()
    NavigationService.navigate('login')
  }

  render() {
    const {
      containerStyle,
      titleBoxStyle,
      textStyle,
      buttonBoxStyle,
      imageBoxStyle,
      buttonStyle,
      buttonTextStyle,
    } = styles

    return (
      <LinearGradient colors={['#f77062', '#fe5196']} style={containerStyle}>
        <View style={titleBoxStyle}>
          <Text style={textStyle}>내가 좋아하는 연예인에게</Text>
          <Text style={textStyle}>똑똑하게 투자 해보세요!</Text>
        </View>
        <View style={imageBoxStyle}>
          <Image
            source={require('../../assets/images/icon.png')}
            style={{ width: 240, height: 480 }}
          />
        </View>
        <View style={buttonBoxStyle}>
          <ButtonWithoutFeedback
            viewStyle={buttonStyle}
            textStyle={buttonTextStyle}
            onPress={() => this.openConfirmModal(true)}
          >
            둘러보기
          </ButtonWithoutFeedback>
          <ButtonWithoutFeedback
            viewStyle={buttonStyle}
            textStyle={buttonTextStyle}
            onPress={() => this.moveToLogin()}
          >
            시작하기
          </ButtonWithoutFeedback>
        </View>
        <ConfirmModal
          modalVisible={this.state.modalVisible}
          leftButtonFn={() => NavigationService.navigate('Main')}
          rightButtonFn={() => this.moveToLogin()}
          leftButtonText="둘러보기"
          rightButtonText="로그인"
        />
      </LinearGradient>
    )
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleBoxStyle: {
    marginTop: 100,
    marginBottom: 45,
  },
  textStyle: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  imageBoxStyle: {
    flex: 1,
  },
  buttonBoxStyle: {
    height: 56,
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  buttonStyle: {
    backgroundColor: '#fff',
    flex: 1,
    borderWidth: 1,
    borderColor: '#f4f4f4',
  },
  buttonTextStyle: {
    fontSize: 14,
  },
}

export default IntroScreen
