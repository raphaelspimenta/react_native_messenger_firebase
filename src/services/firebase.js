import * as firebase from 'firebase'

class Firebase {

  static init() {
    firebase.initializeApp({
      apiKey: '',
      authDomain: '',
      databaseURL: '',
      projectId: '',
      storageBucket: '',
      messagingSenderId: '',
    })
  }

}

export default Firebase
