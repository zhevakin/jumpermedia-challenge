import {
  GET_ISSUES_REQUEST,
  GET_ISSUES_SUCCESS,
  GET_ISSUES_FAIL,
  SET_ASSIGNEE,
  SET_REPO,
} from './types'

export const getIssues = (repo, assignee, page, perPage = 30) => ({
  types: [GET_ISSUES_REQUEST, GET_ISSUES_SUCCESS, GET_ISSUES_FAIL],
  promise: ({ get }) => get(`/api/repos/${repo}/issues`, {
    params: {
      assignee: assignee || null,
      page: page || null,
      per_page: perPage,
    },
  }),
})

export const setAssignee = (assignee) => ({
  type: SET_ASSIGNEE,
  assignee,
})

export const setRepo = (repo) => ({
  type: SET_REPO,
  repo,
})
