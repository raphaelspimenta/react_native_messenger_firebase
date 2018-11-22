export const types = {
  TALK_REQUESTING: 'TALK_REQUESTING',
  TALK_SUCCESS: 'TALK_SUCCESS',
  TALK_ERROR: 'TALK_ERROR',
  TALK_SET_MESSAGE: 'TALK_SET_MESSAGE',
  TALK_SEND_MESSAGE: 'TALK_SEND_MESSAGE',
  TALK_SENDMESSAGE_SUCCESS: 'TALK_SENDMESSAGE_SUCCESS',
  TALK_SENDMESSAGE_ERROR: 'TALK_SENDMESSAGE_ERROR',
}

export const actions = {
  talkRequest: ({ name, email }) => ({
    type: types.TALK_REQUESTING,
    payload: {
      name,
      email,
    },
  }),
  setMessage: message => ({
    type: types.TALK_SET_MESSAGE,
    payload: message,
  }),
  sendMessage: ({ message, name, email }) => {
    return {
      type: types.TALK_SEND_MESSAGE,
      payload: {
        message,
        name,
        email,
      },
    }
  },
  messagesRequest: (email) => {
    return ({
      type: types.TALK_REQUESTING,
      payload: email,
    })
  },
}
