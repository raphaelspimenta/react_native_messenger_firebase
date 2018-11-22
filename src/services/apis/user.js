import { AsyncStorage } from 'react-native'
import * as firebase from 'firebase'
import b64 from 'base-64'

import keys from 'core/constants/storage'

class Api {

  static signUp(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
  }

  static setData(email, data) {
    const email64 = b64.encode(email)
    const ref = `/users/${email64}`

    return firebase.database().ref(ref).push(data)
  }

  static signIn(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
  }

  static logOut() {
    return firebase.auth().signOut()
  }

  static createContact(name, email) {
    return AsyncStorage.getItem(keys.user_credentials).then((myemail) => {
      const myemail64 = b64.encode(myemail)
      const ref = `/contacts/${myemail64}`

      return this.getUser(email).then((snapshot) => {
        if (snapshot.val()) {
          return firebase.database().ref(ref).push({ name, email })
        }

        return null
      })
    })
  }

  static getUser(email) {
    const email64 = b64.encode(email)
    const ref = `/users/${email64}`

    return firebase.database().ref(ref).once('value')
  }

  static contactsFetch(callback) {
    return AsyncStorage.getItem(keys.user_credentials).then((myemail) => {
      const myemail64 = b64.encode(myemail)

      const ref = `/contacts/${myemail64}`

      return firebase.database().ref(ref).on('value', callback)

    })
  }

  static sendMessage(message, name, email) {
    return AsyncStorage.getItem(keys.user_credentials).then((myemail) => {
      const myemail64 = b64.encode(myemail)
      const hisemail64 = b64.encode(email)
      const myref = `/messages/${myemail64}/${hisemail64}`

      return firebase.database().ref(myref)
        .push({
          message,
          type: 'sent',
        })
    })
  }

  static copyMessage(message, name, email) {
    return AsyncStorage.getItem(keys.user_credentials).then((myemail) => {
      const myemail64 = b64.encode(myemail)
      const hisemail64 = b64.encode(email)
      const hisref = `/messages/${hisemail64}/${myemail64}`

      firebase.database().ref(hisref).push({
        message,
        type: 'received',
      })
    })
  }

  static createTalk(name, email) {
    return AsyncStorage.getItem(keys.user_credentials).then((myemail) => {
      const myemail64 = b64.encode(myemail)
      const hisemail64 = b64.encode(email)
      const talkref = `/talks/${myemail64}/${hisemail64}`

      firebase.database().ref(talkref).set({
        name,
        email,
      })
    })
  }

  static talksFetch(callback) {
    return AsyncStorage.getItem(keys.user_credentials).then((myemail) => {
      const myemail64 = b64.encode(myemail)

      const ref = `/talks/${myemail64}`

      return firebase.database().ref(ref).on('value', callback)

    })
  }

  static messagesFetch(email, callback) {
    return AsyncStorage.getItem(keys.user_credentials).then((myemail) => {
      const myemail64 = b64.encode(myemail)
      const hisemail64 = b64.encode(email)

      const ref = `/messages/${myemail64}/${hisemail64}`

      return firebase.database().ref(ref).on('value', callback)

    })
  }


}

export default Api
