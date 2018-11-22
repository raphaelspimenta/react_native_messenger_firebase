import { fork, all } from 'redux-saga/effects'
import signupSaga from 'containers/Signup/saga'
import signinSaga from 'containers/Signin/saga'
import homeSaga from 'containers/Home/saga'
import contactSaga from 'containers/Contact/saga'
import contactlistSaga from 'containers/Contactlist/saga'
import talkSaga from 'containers/Talk/saga'
import talklistSaga from 'containers/Talklist/saga'

function* sagas() {
  yield all([
    fork(signupSaga),
    fork(signinSaga),
    fork(contactSaga),
    fork(contactlistSaga),
    fork(talkSaga),
    fork(talklistSaga),
    fork(homeSaga),
  ])
}

export default sagas
