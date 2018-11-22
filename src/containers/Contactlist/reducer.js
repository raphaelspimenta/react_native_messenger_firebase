import createReducer from 'core/utils/redux'
import { types } from './action'

export const initialState = {
  requesting: false,
  successful: false,
  messages: [],
  errors: [],
  contacts: [],
}

const reducer = {
  [types.CONTACTLIST_REQUESTING]: state => ({
    ...state,
    requesting: true,
    successful: false,
    messages: [{ body: 'Adding contact in...', time: new Date() }],
    errors: [],
  }),
  [types.CONTACTLIST_SUCCESS]: (state, action) => ({
    ...state,
    errors: [],
    messages: [{
      body: 'Successfully fetch contacts',
      time: new Date(),
    }],
    requesting: false,
    successful: true,
    contacts: action.contacts,
  }),
  [types.CONTACTLIST_ERROR]: (state, error) => ({
    ...state,
    errors: [error],
    messages: [],
    requesting: false,
    successful: false,
  }),
  [types.CONTACTLIST_SET_SUCCESS]: (state, successful) => ({
    ...state,
    successful: successful.payload,
  }),
}

export default createReducer(initialState, reducer)
