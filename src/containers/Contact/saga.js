import { call, put, takeLatest } from 'redux-saga/effects'
import { showMessage } from 'react-native-flash-message'
import Api from 'services/apis/user'
import NavigationService from 'core/utils/navigationService'
import { types } from './action'

function createContactApi(name, email) {
  return Api.createContact(name, email)
    .then(response => response)
    .catch((error) => { throw error })
}

function* createContactFlow(action) {
  try {
    const { name, email } = action.payload
    const response = yield call(createContactApi, name.payload, email.payload)
    if (!response) {
      const errorMessage = 'Usuário não existe na base de dados da aplicação'
      showMessage({ message: errorMessage, type: 'danger', duration: 5000 })
      yield put({ type: types.CONTACT_ERROR, error: { code: 500, message: errorMessage } })
    } else {
      yield put({ type: types.CONTACT_SUCCESS, response })
      showMessage({ message: 'Contato adicionado com sucesso', type: 'success', duration: 5000 })
      yield NavigationService.navigate('Home')
    }
  } catch (error) {
    yield put({ type: types.CONTACT_ERROR, error })
    showMessage({ message: 'Algum erro aconteceu!', type: 'danger', duration: 5000 })
  }
}

function* createContactWatcher() {
  yield takeLatest(types.CONTACT_REQUESTING, createContactFlow)
}

export default createContactWatcher
