export const types = {
  INDEX_CHANGE: 'INDEX_CHANGE',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  LOGOUT_ERROR: 'LOGOUT_ERROR',
  LOGOUT_REQUESTING: 'LOGOUT_REQUESTING',
}

export const actions = {
  indexChange: index => ({
    type: types.INDEX_CHANGE,
    index,
  }),
  logOut: () => ({
    type: types.LOGOUT_REQUESTING,
  }),
}
