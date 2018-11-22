export const types = {
  TALKLIST_REQUESTING: 'TALKLIST_REQUESTING',
  TALKLIST_SUCCESS: 'TALKLIST_SUCCESS',
  TALKLIST_ERROR: 'TALKLIST_ERROR',
  TALKLIST_SET_SUCCESS: 'TALKLIST_SET_SUCCESS',
}

export const actions = {
  talklistRequest: response => ({
    type: types.TALKLIST_REQUESTING,
    payload: response,
  }),
  setSuccess: successful => ({
    type: types.TALKLIST_SET_SUCCESS,
    payload: successful,
  }),
}
