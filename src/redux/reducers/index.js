import { combineReducers } from 'redux'
import auth from './auth.reducer'
import rank from './rank.reducer'

const rootReducer = combineReducers({
  auth,
  rank,
})

export default rootReducer
