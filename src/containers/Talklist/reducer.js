import createReducer from 'core/utils/redux'
import { types } from './action'

export const initialState = {
  requesting: false,
  successful: false,
  messages: [],
  errors: [],
  talks: [],
}

const reducer = {
  [types.TALKLIST_REQUESTING]: state => ({
    ...state,
    requesting: true,
    successful: false,
    messages: [{ body: 'Adding talk in...', time: new Date() }],
    errors: [],
  }),
  [types.TALKLIST_SUCCESS]: (state, action) => ({
    ...state,
    errors: [],
    messages: [{
      body: 'Successfully fetch talks',
      time: new Date(),
    }],
    requesting: false,
    successful: true,
    talks: action.talks,
  }),
  [types.TALKLIST_ERROR]: (state, error) => ({
    ...state,
    errors: [error],
    messages: [],
    requesting: false,
    successful: false,
  }),
  [types.TALKLIST_SET_SUCCESS]: (state, successful) => ({
    ...state,
    successful: successful.payload,
  }),
}

export default createReducer(initialState, reducer)
