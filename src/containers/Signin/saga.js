import { call, put, takeLatest } from 'redux-saga/effects'
import NavigationService from 'core/utils/navigationService'
import { AsyncStorage } from 'react-native'
import Api from 'services/apis/user'
import keys from 'core/constants/storage'
import { types } from './action'

function signinApi(email, password) {
  return Api.signIn(email, password)
    .then(response => response.user)
    .catch((error) => { throw error })
}

function* signinFlow(action) {
  try {
    const { email, password } = action.payload
    const response = yield call(signinApi, email.payload, password.payload)
    yield AsyncStorage.setItem(keys.user_credentials, email.payload)
    yield put({ type: types.SIGNIN_SUCCESS, response })
    yield NavigationService.navigate('Home')
  } catch (error) {
    yield put({ type: types.SIGNIN_ERROR, error })
  }
}

function* signinWatcher() {
  yield takeLatest(types.SIGNIN_REQUESTING, signinFlow)
}

export default signinWatcher
