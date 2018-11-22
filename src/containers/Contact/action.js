export const types = {
  CONTACT_REQUESTING: 'CONTACT_REQUESTING',
  CONTACT_SUCCESS: 'CONTACT_SUCCESS',
  CONTACT_ERROR: 'CONTACT_ERROR',
  CONTACT_SET_NAME: 'CONTACT_SET_NAME',
  CONTACT_SET_EMAIL: 'CONTACT_SET_EMAIL',
  CONTACT_SET_SUCCESS: 'CONTACT_SET_SUCCESS',
}

export const actions = {
  contactRequest: ({ name, email }) => ({
    type: types.CONTACT_REQUESTING,
    payload: {
      name,
      email,
    },
  }),
  setName: name => ({
    type: types.CONTACT_SET_NAME,
    payload: name,
  }),
  setEmail: email => ({
    type: types.CONTACT_SET_EMAIL,
    payload: email,
  }),
  setSuccess: successful => ({
    type: types.CONTACT_SET_SUCCESS,
    payload: successful,
  }),
}
