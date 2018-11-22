import React, { Component } from 'react'
import { View, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Hideo } from 'react-native-textinput-effects'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import LottieView from 'lottie-react-native'
import SubmitButton from 'components/SubmitButton'
import Loader from 'components/Loader'
import styles from 'core/constants/styles'
import Pencil from 'core/constants/looties/pencil_write.json'
import { actions } from './action'

class Signup extends Component {

  _setName = (name) => {
    const { setName } = this.props
    setName(name)
  }

  _setEmail = (email) => {
    const { setEmail } = this.props
    setEmail(email)
  }

  _setPassword = (password) => {
    const { setPassword } = this.props
    setPassword(password)
  }

  _submit = () => {
    const {
      signup: {
        name,
        email,
        password,
      },
      signupRequest,
    } = this.props
    signupRequest({ name, email, password })
  }

  render() {

    const {
      signup: {
        requesting,
        name,
        email,
        password,
      },
    } = this.props

    return (
      <KeyboardAvoidingView behavior="padding" enabled style={styles.stylesLogin.main}>
        <Loader loading={requesting} />
        <View style={styles.stylesLogin.viewHeader}>
          <LottieView
            source={Pencil}
            autoPlay
          />
        </View>
        <View style={styles.stylesLogin.viewForm}>
          <Hideo
            iconClass={FontAwesomeIcon}
            iconName="user"
            iconColor="dodgerblue"
            iconBackgroundColor="white"
            placeholder="Nome"
            autoCapitalize="none"
            onChangeText={_name => this._setName(_name)}
          />
          <Hideo
            iconClass={FontAwesomeIcon}
            iconName="envelope"
            iconColor="dodgerblue"
            iconBackgroundColor="white"
            placeholder="Email"
            onChangeText={_email => this._setEmail(_email)}
            autoCapitalize="none"
          />
          <Hideo
            iconClass={FontAwesomeIcon}
            iconName="key"
            iconColor="dodgerblue"
            iconBackgroundColor="white"
            placeholder="Senha"
            onChangeText={_password => this._setPassword(_password)}
            autoCapitalize="none"
            secureTextEntry
          />
          <View style={styles.stylesLogin.viewButton}>
            <SubmitButton action="submit" onPress={this._submit} title="Cadastrar" disabled={!name || !email || !password} />
          </View>
        </View>
      </KeyboardAvoidingView>
    )

  }

}

Signup.defaultProps = {
  signupRequest: () => {},
  setName: () => {},
  setEmail: () => {},
  setPassword: () => {},
  signup: {
    requesting: false,
    successful: false,
    messages: [],
    errors: [],
    name: null,
    email: null,
    password: null,
  },
}

Signup.propTypes = {
  signupRequest: PropTypes.func,
  setName: PropTypes.func,
  setEmail: PropTypes.func,
  setPassword: PropTypes.func,
  signup: PropTypes.shape({
    requesting: PropTypes.bool,
    successful: PropTypes.bool,
    messages: PropTypes.array,
    errors: PropTypes.array,
    name: PropTypes.any,
    email: PropTypes.any,
    password: PropTypes.any,
  }),
}

const mapStateToProps = (state) => {
  return ({
    signup: state.signupReducer,
  })
}

const { signupRequest, setName, setEmail, setPassword } = actions

const connected = connect(mapStateToProps, {
  signupRequest,
  setName,
  setEmail,
  setPassword,
})(Signup)

export default connected
