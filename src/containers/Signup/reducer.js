import createReducer from 'core/utils/redux'
import { types } from './action'

export const initialState = {
  requesting: false,
  successful: false,
  messages: [],
  errors: [],
  name: null,
  email: null,
  password: null,
}

const reducer = {
  [types.SET_NAME]: (state, name) => ({
    ...state,
    name,
  }),
  [types.SET_EMAIL]: (state, email) => ({
    ...state,
    email,
  }),
  [types.SET_PASSWORD]: (state, password) => ({
    ...state,
    password,
  }),
  [types.SIGNUP_REQUESTING]: state => ({
    ...state,
    requesting: true,
    successful: false,
    messages: [{ body: 'Signing up...', time: new Date() }],
    errors: [],
  }),
  [types.SIGNUP_SUCCESS]: state => ({
    ...state,
    ...initialState,
  }),
  [types.SIGNUP_ERROR]: (state, error) => ({
    ...state,
    errors: [error],
    messages: [],
    requesting: false,
    successful: false,
  }),
}

export default createReducer(initialState, reducer)
