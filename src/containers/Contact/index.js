import React, { PureComponent } from 'react'
import { View, SafeAreaView, KeyboardAvoidingView } from 'react-native'
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

class Contact extends PureComponent {

  static navigationOptions = {
    title: 'Adicionar contato',
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }

  componentDidMount() {
    this._setSuccess(false)
  }

  _clearForm = () => {
    this._setName('')
    this._setEmail('')
  }

  _successCreated = () => {
    const { navigation } = this.props
    navigation.navigate('Home')
  }

  _setName = (name) => {
    const { setName } = this.props
    setName(name)
  }

  _setEmail = (email) => {
    const { setEmail } = this.props
    setEmail(email)
  }

  _setSuccess = (successful) => {
    const { setSuccess } = this.props
    setSuccess(successful)
  }

  _submit = () => {
    const {
      contact: {
        name,
        email,
      },
      contactRequest,
    } = this.props
    contactRequest({ name, email })
  }

  render() {

    const {
      contact: {
        name,
        email,
        requesting,
      },
    } = this.props

    return (
      <SafeAreaView style={styles.safeArea}>
        <Loader loading={requesting} />
        <KeyboardAvoidingView behavior="padding" enabled style={styles.stylesLogin.main}>
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
          </View>
          <View style={styles.stylesLogin.viewButton}>
            <SubmitButton title="Salvar" onPress={this._submit} disabled={!name || !email} />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    )

  }

}

Contact.defaultProps = {
  contactRequest: () => {},
  setName: () => {},
  setEmail: () => {},
  setSuccess: () => {},
  contact: {
    requesting: false,
    successful: false,
    messages: [],
    errors: [],
    name: null,
    email: null,
  },
}

Contact.propTypes = {
  navigation: PropTypes.any.isRequired,
  contactRequest: PropTypes.func,
  setName: PropTypes.func,
  setEmail: PropTypes.func,
  setSuccess: PropTypes.func,
  contact: PropTypes.shape({
    requesting: PropTypes.bool,
    successful: PropTypes.bool,
    messages: PropTypes.array,
    errors: PropTypes.array,
    name: PropTypes.any,
    email: PropTypes.any,
  }),
}

const mapStateToProps = (state) => {
  return ({
    contact: state.contactReducer,
  })
}

const { contactRequest, setName, setEmail, setSuccess } = actions

const connected = connect(mapStateToProps, {
  contactRequest,
  setName,
  setEmail,
  setSuccess,
})(Contact)

export default connected
