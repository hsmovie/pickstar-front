import {
  RANK_FETCH,
  FETCH_RANK_SUCCESS,
  RANK_NAME_CHANGED,
} from '../actions/rank.actions'

const INITIAL_STATE = {
  rankData: [],
  filteredRankData: [],
  starName: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RANK_FETCH:
      return { ...state }
    case FETCH_RANK_SUCCESS:
      return { ...state, rankData: action.payload }
    case RANK_NAME_CHANGED: {
      const willFilterData = [...state.rankData]
      const filteredData = willFilterData.filter((row) => {
        return row.name.indexOf(action.payload) > -1
      })
      return { ...state, starName: action.payload, filteredRankData: filteredData }
    }
    default:
      return INITIAL_STATE
  }
}
