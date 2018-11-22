import { call, put, take, takeLatest } from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'
import Api from 'services/apis/user'
import { types } from './action'

function talksFetchApi() {

  return eventChannel((emit) => {
    const unsubscribe = Api.talksFetch((snapshot) => {
      if (snapshot.val()) {
        emit(snapshot.val())
      } else {
        emit([])
      }
    })

    return () => { unsubscribe.close() }
  })
}

function* talksFetchFlow() {
  try {
    const response = yield call(talksFetchApi)
    while (true) {
      const talks = yield take(response)
      yield put({ type: types.TALKLIST_SUCCESS, talks })
    }
  } catch (error) {
    yield put({ type: types.TALKLIST_ERROR, error })
  } finally {
    yield put({ type: types.TALKLIST_SUCCESS, talks: [] })
  }
}

function* createTalkWatcher() {
  yield takeLatest(types.TALKLIST_REQUESTING, talksFetchFlow)
}

export default createTalkWatcher
