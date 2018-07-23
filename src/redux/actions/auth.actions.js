export const TYPE_EMAIL = 'TYPE_EMAIL'
export const TYPE_PASSWORD = 'TYPE_PASSWORD'

export const LOGIN_FACEBOOK = 'LOGIN_FACEBOOK'
export const LOGIN_FACEBOOK_SUCCESS = 'LOGIN_FACEBOOK_SUCCESS'
export const LOGIN_FACEBOOK_FAIL = 'LOGIN_FACEBOOK_FAIL'

export const LOGIN_GOOGLE = 'LOGIN_GOOGLE'
export const LOGIN_GOOGLE_SUCCESS = 'LOGIN_GOOGLE_SUCCESS'
export const LOGIN_GOOGLE_FAIL = 'LOGIN_GOOGLE_FAIL'

export const typeEmail = (text) => {
  return { type: TYPE_EMAIL, payload: text }
}

export const typePassword = (text) => {
  return { type: TYPE_PASSWORD, payload: text }
}

export const loginFacebook = () => {
  return { type: LOGIN_FACEBOOK }
}

export const loginGoogle = () => {
  return { type: LOGIN_GOOGLE }
}
