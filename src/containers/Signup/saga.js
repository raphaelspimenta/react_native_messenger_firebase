import { call, put, takeLatest } from 'redux-saga/effects'
import Api from 'services/apis/user'
import NavigationService from 'core/utils/navigationService'
import { types } from './action'

function signupApi(email, password) {
  return Api.signUp(email, password)
    .then(response => response.user)
    .catch((error) => { throw error })
}

function signinApi(email, password) {
  return Api.signIn(email, password)
    .then(response => response.user)
    .catch((error) => { throw error })
}

function setData(email, data) {
  return Api.setData(email, data)
    .then(response => response)
    .catch((error) => { throw error })
}

function* signupFlow(action) {
  try {
    const { email, password, name } = action.payload
    const response = yield call(signupApi, email.payload, password.payload)
    yield call(signinApi, email.payload, password.payload)
    yield call(setData, email.payload, { name: name.payload })
    yield put({ type: types.SIGNUP_SUCCESS, response })
    yield NavigationService.navigate('Home')
  } catch (error) {
    yield put({ type: types.SIGNUP_ERROR, error })
  }
}

function* signupWatcher() {
  yield takeLatest(types.SIGNUP_REQUESTING, signupFlow)
}

export default signupWatcher
