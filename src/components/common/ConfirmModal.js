import React, { Component } from 'react'
import { View, Text, Modal } from 'react-native'
import { ButtonWithoutFeedback } from './ButtonWithoutFeedback'

class ConfirmModal extends Component {
  render() {
    const {
      modalVisible,
      leftButtonText,
      rightButtonText,
      leftButtonFn,
      rightButtonFn,
    } = this.props

    const {
      containerStyle,
      textBoxStyle,
      buttonStyle,
      buttonBoxStyle,
    } = styles
    return (
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          console.log('Modal has been closed.')
        }}
      >
        <View style={containerStyle}>
          <View style={textBoxStyle}>
            <Text>로그인 후킹</Text>
            <Text>로그인 후킹</Text>
          </View>
          <View style={buttonBoxStyle}>
            <ButtonWithoutFeedback
              onPress={() => leftButtonFn()}
              viewStyle={buttonStyle}
            >
              {leftButtonText}
            </ButtonWithoutFeedback>
            <ButtonWithoutFeedback
              onPress={() => rightButtonFn()}
              viewStyle={buttonStyle}
            >
              {rightButtonText}
            </ButtonWithoutFeedback>
          </View>
        </View>
      </Modal>
    )
  }
}

const styles = {
  containerStyle: {
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    marginTop: 150,
    marginBottom: 150,
    marginRight: 50,
    marginLeft: 50,
  },
  textBoxStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBoxStyle: {
    flexDirection: 'row',
  },
  buttonStyle: {
    height: 50,
    borderWidth: 1,
    borderColor: '#f4f4f4',
    flex: 1,
  },
}

export { ConfirmModal }
