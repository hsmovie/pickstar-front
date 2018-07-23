export const FETCH_RANK_REQUEST = 'FETCH_RANK'
export const FETCH_RANK_SUCCESS = 'FETCH_RANK_SUCCESS'
export const FETCH_RANK_FAIL = 'FETCH_RANK_FAIL'

export const RANK_NAME_CHANGED = 'RANK_NAME_CHANGED'

export const fetchRankData = () => {
  return { type: FETCH_RANK_REQUEST }
}
