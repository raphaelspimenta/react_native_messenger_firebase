import createReducer from 'core/utils/redux'
import { types } from './action'

export const initialState = {
  requesting: false,
  successful: false,
  messages: [],
  errors: [],
  message: null,
  conversation: [],
  email: null,
}

const reducer = {
  [types.TALK_REQUESTING]: (state, action) => {
    return ({
      ...state,
      requesting: true,
      successful: false,
      messages: [{ body: 'Adding talk in...', time: new Date() }],
      errors: [],
      email: action.payload,
    })
  },
  [types.TALK_SUCCESS]: (state, action) => ({
    ...state,
    errors: [],
    messages: [{
      body: 'Successfully fetched messages',
      time: new Date(),
    }],
    requesting: false,
    successful: true,
    conversation: action.conversation,
  }),
  [types.TALK_ERROR]: (state, error) => ({
    ...state,
    errors: [error],
    messages: [],
    requesting: false,
    successful: false,
  }),
  [types.TALK_SET_MESSAGE]: (state, message) => ({
    ...state,
    message,
  }),
  [types.TALK_SEND_MESSAGE]: (state, action) => ({
    ...state,
    message: action.payload,
  }),
  [types.TALK_SENDMESSAGE_SUCCESS]: state => ({
    ...state,
    errors: [],
    messages: [{
      body: 'Successfully created talk',
      time: new Date(),
    }],
    requesting: false,
    successful: true,
    message: null,
  }),
  [types.TALK_SENDMESSAGE_ERROR]: (state, error) => ({
    ...state,
    errors: [error],
    messages: [],
    requesting: false,
    successful: false,
  }),
}

export default createReducer(initialState, reducer)
