import { delay } from 'redux-saga'
import { put, call, takeLatest } from 'redux-saga/effects'
import data from '../../data.json'
import * as actions from '../actions'

function* fetchRankData() {
  try {
    yield call(delay, 1000)
    yield put({
      type: actions.FETCH_RANK_SUCCESS,
      payload: data.rank,
    })
  } catch (err) {
    yield put({ type: actions.FETCH_RANK_FAIL })
  }
}

export function* watchFetchRankData() {
  yield takeLatest(actions.FETCH_RANK_REQUEST, fetchRankData)
}
