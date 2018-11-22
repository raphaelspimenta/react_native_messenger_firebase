export const types = {
  SIGNIN_REQUESTING: 'SIGNIN_REQUESTING',
  SIGNIN_SUCCESS: 'SIGNIN_SUCCESS',
  SIGNIN_ERROR: 'SIGNIN_ERROR',
  SET_EMAIL: 'SET_EMAIL',
  SET_PASSWORD: 'SET_PASSWORD',
  SET_LOADING: 'SET_LOADING',
}

export const actions = {
  signinRequest: ({ email, password }) => ({
    type: types.SIGNIN_REQUESTING,
    payload: {
      email,
      password,
    },
  }),
  setEmail: email => ({
    type: types.SET_EMAIL,
    payload: email,
  }),
  setPassword: password => ({
    type: types.SET_PASSWORD,
    payload: password,
  }),
  setLoading: requesting => ({
    type: types.SET_LOADING,
    requesting,
  }),
}
