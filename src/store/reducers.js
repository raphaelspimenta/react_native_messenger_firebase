import { combineReducers } from 'redux'
import signupReducer from 'containers/Signup/reducer'
import signinReducer from 'containers/Signin/reducer'
import homeReducer from 'containers/Home/reducer'
import contactReducer from 'containers/Contact/reducer'
import contactlistReducer from 'containers/Contactlist/reducer'
import talkReducer from 'containers/Talk/reducer'
import talklistReducer from 'containers/Talklist/reducer'

const reducers = combineReducers({
  signupReducer,
  signinReducer,
  homeReducer,
  contactReducer,
  contactlistReducer,
  talkReducer,
  talklistReducer,
})

export default reducers
