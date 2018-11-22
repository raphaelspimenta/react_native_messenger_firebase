import { call, put, take, takeLatest } from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'
import Api from 'services/apis/user'
import { types } from './action'

function contactsFetchApi() {

  return eventChannel((emit) => {
    const unsubscribe = Api.contactsFetch((snapshot) => {
      if (snapshot.val()) {
        emit(snapshot.val())
      } else {
        emit([])
      }
    })

    return () => { unsubscribe.close() }
  })
}

function* contactsFetchFlow() {
  try {
    const response = yield call(contactsFetchApi)
    while (true) {
      const contacts = yield take(response)
      yield put({ type: types.CONTACTLIST_SUCCESS, contacts })
    }
  } catch (error) {
    yield put({ type: types.CONTACTLIST_ERROR, error })
  } finally {
    yield put({ type: types.CONTACTLIST_SUCCESS, contacts: [] })
  }
}

function* createContactWatcher() {
  yield takeLatest(types.CONTACTLIST_REQUESTING, contactsFetchFlow)
}

export default createContactWatcher
