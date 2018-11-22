import createReducer from 'core/utils/redux'
import { types } from './action'

export const initialState = {
  routes: [
    { key: 'first', title: 'Conversas' },
    { key: 'second', title: 'Contatos' },
  ],
  index: 0,
}

const reducer = {
  [types.INDEX_CHANGE]: (state, action) => {
    return ({
      ...state,
      index: action.index,
    })
  },
  [types.LOGOUT_REQUESTING]: state => ({
    ...state,
  }),
}

export default createReducer(initialState, reducer)
