import React, { Component } from 'react'
import { LinearGradient } from 'expo'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import NavigationService from '../../navigation/NavigationService'
import { typeEmail,
  typePassword,
  loginFacebook,
  loginGoogle,
} from '../../redux/actions/auth.actions'
import { Input, Button } from '../../components/common'
import SocialLoginButton from './components/SocialLoginButton'

class LoginScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  componentDidMount() {
  }

  render() {
    const {
      containerStyle,
      textStyle,
      buttonStyle,
      upSideInputStyle,
      downSideInputStyle,
    } = styles

    const {
      email,
      password,
      typeEmail,
      typePassword,
      loginFacebook,
      loginGoogle,
    } = this.props
    return (
      <LinearGradient colors={['#f77062', '#fe5196']} style={containerStyle}>
        <Text style={textStyle}>PICKSTAR</Text>
        <Input
          placeholder="아이디 (이메일)"
          value={email}
          onChangeText={typeEmail}
          style={upSideInputStyle}
        />

        <Input
          placeholder="비밀번호"
          value={password}
          onChangeText={typePassword}
          style={downSideInputStyle}
          secureTextEntry
        />
        <Button
          style={buttonStyle}
          onPress={() => NavigationService.navigate('Main')}
          // onPress={() => NavigationService.navigate('pickFavoriteStar')}
        >
          메인으로
        </Button>
        <Button
          style={{ marginBottom: 10 }}
          onPress={() => NavigationService.navigate('pickFavoriteStar')}
        >
          관심연예인 플로우
        </Button>
        <SocialLoginButton name="Facebook" onPress={() => loginFacebook()} />
        <SocialLoginButton name="Google" onPress={() => loginGoogle()} />
      </LinearGradient>
    )
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 40,
    paddingRight: 40,
  },
  textStyle: {
    fontSize: 21,
    color: '#fff',
    marginTop: 100,
    fontWeight: '400',
    marginBottom: 50,
  },
  buttonStyle: {
    marginTop: 50,
    marginBottom: 10,
  },
  barStyle: {
    color: '#fff',
  },
  upSideInputStyle: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  downSideInputStyle: {
    // borderTopWidth: 1,
    // borderTopColor: '#e3e3e3',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  ButtonsContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    paddingLeft: 30,
    paddingRight: 30,
  },
}

const mapStateToProps = (state) => {
  const { email, password, socialLoginSuccess } = state.auth

  return { email, password, socialLoginSuccess }
}

const mapDispatchToProps = {
  typeEmail,
  typePassword,
  loginFacebook,
  loginGoogle,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)


/*
아이디찾기, 비밀번호 찾기, 회원가입 버튼
<View style={ButtonsContainerStyle}>
  <ButtonWithoutFeedback>아이디 찾기</ButtonWithoutFeedback>
    <Text style={barStyle}>|</Text>
      <ButtonWithoutFeedback>비밀번호 찾기</ButtonWithoutFeedback>
    <Text style={barStyle}>|</Text>
  <ButtonWithoutFeedback>회원가입</ButtonWithoutFeedback>
</View>
*/
