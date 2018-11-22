export const types = {
  SIGNUP_REQUESTING: 'SIGNUP_REQUESTING',
  SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
  SIGNUP_ERROR: 'SIGNUP_ERROR',
  SET_NAME: 'SET_NAME',
  SET_EMAIL: 'SET_EMAIL',
  SET_PASSWORD: 'SET_PASSWORD',
}

export const actions = {
  signupRequest: ({ name, email, password }) => ({
    type: types.SIGNUP_REQUESTING,
    payload: {
      name,
      email,
      password,
    },
  }),
  setName: name => ({
    type: types.SET_NAME,
    payload: name,
  }),
  setEmail: email => ({
    type: types.SET_EMAIL,
    payload: email,
  }),
  setPassword: password => ({
    type: types.SET_PASSWORD,
    payload: password,
  }),
}
