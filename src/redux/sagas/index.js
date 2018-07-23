import { all } from 'redux-saga/effects'
import * as auth from './auth.sagas'
import * as rank from './rank.sagas'

export default function* rootSaga() {
  yield all([
    auth.watchLoginFacebook(),
    auth.satchLoginGoogle(),

    rank.watchFetchRankData(),
  ])
}
