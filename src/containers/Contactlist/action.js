export const types = {
  CONTACTLIST_REQUESTING: 'CONTACTLIST_REQUESTING',
  CONTACTLIST_SUCCESS: 'CONTACTLIST_SUCCESS',
  CONTACTLIST_ERROR: 'CONTACTLIST_ERROR',
  CONTACTLIST_SET_SUCCESS: 'CONTACTLIST_SET_SUCCESS',
}

export const actions = {
  contactlistRequest: response => ({
    type: types.CONTACTLIST_REQUESTING,
    payload: response,
  }),
  setSuccess: successful => ({
    type: types.CONTACTLIST_SET_SUCCESS,
    payload: successful,
  }),
}
