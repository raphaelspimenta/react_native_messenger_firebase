import React, { PureComponent } from 'react'
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, SafeAreaView, FlatList } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import map from 'lodash/map'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from 'core/constants/styles'
import { actions } from './action'

class Talk extends PureComponent {

  static navigationOptions = ({ navigation }) => {
    const user = navigation.getParam('user')

    return {
      title: user.name,
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }

  componentDidMount() {
    const { navigation, messagesRequest } = this.props
    const user = navigation.getParam('user')
    messagesRequest(user.email)
  }

  _setMessage = (message) => {
    const { setMessage } = this.props

    setMessage(message)
  }

  _submit = () => {
    const {
      sendMessage,
      talk: {
        message,
      },
      navigation,
    } = this.props
    const { name, email } = navigation.getParam('user')
    sendMessage({ message, name, email })
    this._textInput.setNativeProps({ text: '' })
    this._setMessage('')
  }

  _renderItem = ({ item }) => {
    if (item.type === 'sent') {
      return (
        <View style={styles.stylesTalk.sent}>
          <Text style={styles.stylesTalk.message}>{item.message}</Text>
        </View>
      )
    }

    return (
      <View style={styles.stylesTalk.received}>
        <Text style={styles.stylesTalk.message}>{item.message}</Text>
      </View>
    )
  }

  _keyExtractor = item => item.uid

  render() {

    const {
      conversation,
    } = this.props

    return (
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView behavior="padding" enabled keyboardVerticalOffset={90} style={styles.stylesLogin.main}>
          <View style={styles.stylesHome.viewTalk}>
            <FlatList
              data={conversation}
              renderItem={this._renderItem}
              keyExtractor={this._keyExtractor}
              ref={(ref) => { this.scrollView = ref }}
              onContentSizeChange={() => {
                this.scrollView.scrollToEnd({ animated: true })
              }}
            />
          </View>
          <View style={styles.stylesHome.viewButtons}>
            <TextInput
              placeholder="Digite aqui"
              style={styles.stylesHome.textTalk}
              onChangeText={_message => this._setMessage(_message)}
              keyboardType="email-address"
              ref={(element) => {
                this._textInput = element
              }}
              editable
            />
            <TouchableOpacity style={styles.stylesHome.sendTalk} onPress={this._submit}>
              <Icon name="send" size={30} color="dodgerblue" />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    )

  }

}

Talk.defaultProps = {
  sendMessage: () => { },
  setMessage: () => { },
  messagesRequest: () => { },
  conversation: [],
  talk: {
    requesting: false,
    successful: false,
    messages: [],
    errors: [],
    message: '',
  },
}

Talk.propTypes = {
  navigation: PropTypes.any.isRequired,
  sendMessage: PropTypes.func,
  setMessage: PropTypes.func,
  messagesRequest: PropTypes.func,
  conversation: PropTypes.array,
  talk: PropTypes.shape({
    requesting: PropTypes.bool,
    successful: PropTypes.bool,
    messages: PropTypes.array,
    errors: PropTypes.array,
    message: PropTypes.any,
  }),
}

const mapStateToProps = (state) => {
  const conversation = map(state.talkReducer.conversation, (val, uid) => {
    return { ...val, uid }
  })

  return ({
    talk: state.talkReducer,
    conversation,
  })
}

const { setMessage, talkRequest, sendMessage, messagesRequest } = actions

const connected = connect(mapStateToProps, {
  talkRequest,
  setMessage,
  sendMessage,
  messagesRequest,
})(Talk)

export default connected
