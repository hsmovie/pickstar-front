import NavigationService from '../../navigation/NavigationService'
import {
  TYPE_EMAIL,
  TYPE_PASSWORD,
  LOGIN_FACEBOOK_SUCCESS,
  LOGIN_FACEBOOK_FAIL,
  LOGIN_GOOGLE_SUCCESS,
  LOGIN_GOOGLE_FAIL,
} from '../actions/auth.actions'


const INITIAL_STATE = {
  email: '',
  password: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPE_EMAIL:
      return { ...state, email: action.payload }
    case TYPE_PASSWORD:
      return { ...state, password: action.payload }

    case LOGIN_FACEBOOK_SUCCESS:
      NavigationService.navigate('Main')
      return { ...state }
    // TODO:: Error handling
    case LOGIN_FACEBOOK_FAIL:
      return INITIAL_STATE

    case LOGIN_GOOGLE_SUCCESS:
      NavigationService.navigate('Main')
      return { ...state }
    // TODO:: Error handling
    case LOGIN_GOOGLE_FAIL:
      return INITIAL_STATE
    default:
      return state
  }
}
