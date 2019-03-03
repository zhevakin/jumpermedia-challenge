import { DEFAULT_REPO } from './consts'
import { GET_ISSUES_REQUEST, GET_ISSUES_SUCCESS, GET_ISSUES_FAIL } from './types'

const initialState = {
  repo: DEFAULT_REPO,
  issues: null,
  issuesError: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ISSUES_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case GET_ISSUES_SUCCESS:
      return {
        ...state,
        loading: false,
        issues: action.result,
      }
    case GET_ISSUES_FAIL:
      return {
        ...state,
        loading: false,
        issuesError: action.error,
      }
    default:
      return state
  }
}
