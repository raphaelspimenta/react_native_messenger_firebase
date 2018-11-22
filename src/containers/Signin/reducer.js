import createReducer from 'core/utils/redux'
import { types } from './action'

export const initialState = {
  requesting: false,
  successful: false,
  messages: [],
  errors: [],
  email: null,
  password: null,
}

const reducer = {
  [types.SET_EMAIL]: (state, email) => ({
    ...state,
    email,
  }),
  [types.SET_PASSWORD]: (state, password) => ({
    ...state,
    password,
  }),
  [types.SET_LOADING]: (state, action) => ({
    ...state,
    requesting: action.requesting,
  }),
  [types.SIGNIN_REQUESTING]: state => ({
    ...state,
    requesting: true,
    successful: false,
    messages: [{ body: 'Signing in...', time: new Date() }],
    errors: [],
  }),
  [types.SIGNIN_SUCCESS]: state => ({
    ...state,
    ...initialState,
  }),
  [types.SIGNIN_ERROR]: (state, error) => ({
    ...state,
    errors: [error],
    messages: [],
    requesting: false,
    successful: false,
  }),
}

export default createReducer(initialState, reducer)
