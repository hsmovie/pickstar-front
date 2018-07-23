// import axios from 'axios'
import { put, takeEvery } from 'redux-saga/effects'
import * as actions from '../actions'

function* test() {
  yield put({
    type: 'TEST',
  })
}

export function* watchLoginFacebook() {
  yield takeEvery(actions.LOGIN_FACEBOOK, test)
}

export function* satchLoginGoogle() {
  yield takeEvery(actions.LOGIN_GOOGLE, test)
}
