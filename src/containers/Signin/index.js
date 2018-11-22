import React, { Component } from 'react'
import { View, Text, TouchableOpacity, AsyncStorage, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Hideo } from 'react-native-textinput-effects'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import LottieView from 'lottie-react-native'
import SubmitButton from 'components/SubmitButton'
import Loader from 'components/Loader'
import styles from 'core/constants/styles'
import keys from 'core/constants/storage'
import PumpedUp from 'core/constants/looties/react_logo.json'
import { actions } from './action'

class Signin extends Component {

  componentWillMount() {
    const { navigation, setLoading } = this.props
    setLoading(true)
    AsyncStorage.getItem(keys.user_credentials).then((myemail) => {
      setLoading(false)
      if (myemail != null) navigation.navigate('Home')
    })
  }

  _setEmail = (email) => {
    const { setEmail } = this.props
    setEmail(email)
  }

  _setPassword = (password) => {
    const { setPassword } = this.props
    setPassword(password)
  }

  _goSignup = () => {
    const { navigation } = this.props
    navigation.navigate('Signup')
  }

  _submit = () => {
    const {
      signin: {
        email,
        password,
      },
      signinRequest,
    } = this.props
    signinRequest({ email, password })
  }

  render() {

    const {
      signin: {
        requesting,
        email,
        password,
      },
    } = this.props

    return (
      <KeyboardAvoidingView behavior="padding" enabled style={styles.stylesLogin.main}>
        <Loader loading={requesting} />
        <View style={styles.stylesLogin.viewHeader}>
          {PumpedUp && (
            <LottieView
              source={PumpedUp}
              autoPlay
            />
          )}
        </View>
        <View style={styles.stylesLogin.viewForm}>
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
          <TouchableOpacity onPress={this._goSignup}>
            <Text style={styles.stylesLogin.labelInfo}>
              Não tem cadastro? Cadastre-se
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.stylesLogin.viewButton}>
          <SubmitButton title="Entrar" onPress={this._submit} disabled={!email || !password} />
        </View>
      </KeyboardAvoidingView>
    )
  }

}

Signin.defaultProps = {
  signinRequest: () => {},
  setEmail: () => {},
  setPassword: () => {},
  setLoading: () => {},
  signin: {
    requesting: false,
    successful: false,
    email: '',
    password: '',
  },
}

Signin.propTypes = {
  navigation: PropTypes.any.isRequired,
  signinRequest: PropTypes.func,
  setEmail: PropTypes.func,
  setPassword: PropTypes.func,
  setLoading: PropTypes.func,
  signin: PropTypes.shape({
    requesting: PropTypes.bool,
    successful: PropTypes.bool,
    email: PropTypes.any,
    password: PropTypes.any,
  }),
}

const mapStateToProps = (state) => {
  return ({
    signin: state.signinReducer,
  })
}

const { signinRequest, setEmail, setPassword, setLoading } = actions

const connected = connect(mapStateToProps, {
  signinRequest,
  setEmail,
  setPassword,
  setLoading,
})(Signin)

export default connected
