import createReducer from 'core/utils/redux'
import { types } from './action'

export const initialState = {
  requesting: false,
  successful: false,
  messages: [],
  errors: [],
  name: null,
  email: null,
}

const reducer = {
  [types.CONTACT_SET_NAME]: (state, name) => ({
    ...state,
    name,
  }),
  [types.CONTACT_SET_EMAIL]: (state, email) => ({
    ...state,
    email,
  }),
  [types.CONTACT_SET_SUCCESS]: (state, successful) => ({
    ...state,
    successful: successful.payload,
  }),
  [types.CONTACT_REQUESTING]: state => ({
    ...state,
    requesting: true,
    successful: false,
    messages: [{ body: 'Adding contact in...', time: new Date() }],
    errors: [],
  }),
  [types.CONTACT_SUCCESS]: state => ({
    ...state,
    errors: [],
    messages: [{
      body: 'Successfully created contact',
      time: new Date(),
    }],
    requesting: false,
    successful: true,
  }),
  [types.CONTACT_ERROR]: (state, error) => ({
    ...state,
    errors: [error],
    messages: [],
    requesting: false,
    successful: false,
  }),
}

export default createReducer(initialState, reducer)
