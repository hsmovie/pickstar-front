import React, { Component } from 'react'
import { View, Text, Modal } from 'react-native'
import { ButtonWithoutFeedback } from './ButtonWithoutFeedback'
import { Ionicons } from '@expo/vector-icons'

class ConfirmModal extends Component {
  closeModal = () => {
    
  }
  render() {
    const {
      modalVisible,
      leftButtonText,
      rightButtonText,
      leftButtonFn,
      rightButtonFn,
      closeConfirmModal,
    } = this.props

    const {
      containerStyle,
      textBoxStyle,
      leftButtonStyle,
      rightButtonStyle,
      buttonBoxStyle,
      closeButtonStyle,
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

          <ButtonWithoutFeedback
            viewStyle={closeButtonStyle}
            onPress={closeConfirmModal}
          >
            <Ionicons
              name="md-close"
              size={24}
            />
          </ButtonWithoutFeedback>

          <View style={textBoxStyle}>
            <Text>로그인 후킹</Text>
            <Text>로그인 후킹</Text>
          </View>
          <View style={buttonBoxStyle}>
            <ButtonWithoutFeedback
              onPress={() => leftButtonFn()}
              viewStyle={leftButtonStyle}
            >
              {leftButtonText}
            </ButtonWithoutFeedback>
            <ButtonWithoutFeedback
              onPress={() => rightButtonFn()}
              viewStyle={rightButtonStyle}
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
    borderRadius: 5,

    flex: 1,
    marginTop: 150,
    marginBottom: 150,
    marginRight: 50,
    marginLeft: 50,

    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  textBoxStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBoxStyle: {
    flexDirection: 'row',
  },
  leftButtonStyle: {
    height: 50,
    borderWidth: 1,
    borderColor: '#f4f4f4',
    flex: 1,
    borderBottomLeftRadius: 5,
  },
  rightButtonStyle: {
    height: 50,
    borderWidth: 1,
    borderColor: '#f4f4f4',
    flex: 1,
    borderBottomRightRadius: 5,
  },
  closeButtonStyle: {
    width: 50,
    height: 50,
    alignSelf: 'flex-end',
  }
}

export { ConfirmModal }
