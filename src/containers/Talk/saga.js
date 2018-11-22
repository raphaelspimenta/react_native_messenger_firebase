import { call, take, put, takeLatest } from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'
import Api from 'services/apis/user'
import { types } from './action'

function sendMessageApi(message, name, email) {
  return Api.sendMessage(message, name, email)
    .then(response => response)
    .catch((error) => { throw error })
}

function copyMessageApi(message, name, email) {
  return Api.copyMessage(message, name, email)
    .then(response => response)
    .catch((error) => { throw error })
}

function createTalkApi(message, name, email) {
  return Api.createTalk(message, name, email)
    .then(response => response)
    .catch((error) => { throw error })
}

function* sendMessageFlow(action) {
  try {
    const { message, name, email } = action.payload
    const response = yield call(sendMessageApi, message.payload, name, email)
    yield call(copyMessageApi, message.payload, name, email)
    yield call(createTalkApi, name, email)
    yield put({ type: types.TALK_SENDMESSAGE_SUCCESS, response })
  } catch (error) {
    yield put({ type: types.TALK_SENDMESSAGE_ERROR, error })
  }
}

function messagesFetchApi(email) {

  return eventChannel((emit) => {
    const unsubscribe = Api.messagesFetch(email, (snapshot) => {
      if (snapshot.val()) {
        emit(snapshot.val())
      } else {
        emit([])
      }
    })

    return () => { unsubscribe.close() }
  })
}

function* getMessagesFlow(action) {
  try {
    const response = yield call(messagesFetchApi, action.payload)
    while (true) {
      const conversation = yield take(response)
      yield put({ type: types.TALK_SUCCESS, conversation })
    }
  } catch (error) {
    yield put({ type: types.TALK_ERROR, error })
  } finally {
    yield put({ type: types.TALK_SUCCESS, conversation: [] })
  }
}

function* talksWatcher() {
  yield takeLatest(types.TALK_SEND_MESSAGE, sendMessageFlow)
  yield takeLatest(types.TALK_REQUESTING, getMessagesFlow)
}

export default talksWatcher
