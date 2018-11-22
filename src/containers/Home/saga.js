import { call, put, takeLatest } from 'redux-saga/effects'
import { AsyncStorage } from 'react-native'
import NavigationService from 'core/utils/navigationService'
import Api from 'services/apis/user'
import keys from 'core/constants/storage'
import { types } from './action'

function logoutApi() {
  return Api.logOut()
    .then(response => response)
    .catch((error) => {
      throw error
    })
}

function* logoutFlow() {
  try {
    const response = yield call(logoutApi)
    yield put({ type: types.LOGOUT_SUCCESS, response })
    yield AsyncStorage.removeItem(keys.user_credentials)
    yield NavigationService.navigate('Signin')
  } catch (error) {
    yield put({ type: types.LOGOUT_ERROR, error })
  }
}

function* logoutWatcher() {
  yield takeLatest(types.LOGOUT_REQUESTING, logoutFlow)
}

export default logoutWatcher
