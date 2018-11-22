import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import { connect } from 'react-redux'
import { TabBar } from 'react-native-tab-view'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'
import { actions } from 'containers/Home/action'
import styles from 'core/constants/styles'

class TabBarMenu extends Component {

  _handlerAddContact = () => {
    const { navigation } = this.props
    navigation.navigate('Contact')
  }

  _handlerSignOut = () => {
    this.userLogout()
  }

  userLogout = () => {
    const { logOut } = this.props
    Alert.alert(
      'Deseja mesmo sair de sua conta?',
      '',
      [
        { text: 'Cancel', onPress: () => {}, style: 'cancel' },
        {
          text: 'OK',
          onPress: () => logOut(),
        },
      ],
      { cancelable: false },
    )
  }

  render() {

    return (
      <View>
        <View style={styles.stylesHome.tabbarlabel}>
          <View>
            <Text style={styles.stylesHome.tabbarText}>
              Boilerplate
            </Text>
          </View>
          <View style={styles.stylesHome.tabbarbuttons}>
            <TouchableOpacity
              style={styles.stylesHome.tabbarIcon}
              onPress={this._handlerAddContact}
            >
              <Icon name="user-plus" size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.stylesHome.tabbarIcon}
              onPress={this._handlerSignOut}
            >
              <Icon name="sign-out" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <TabBar {...this.props} />
      </View>
    )

  }

}

TabBarMenu.defaultProps = {
  logOut: () => {},
}

TabBarMenu.propTypes = {
  navigation: PropTypes.any.isRequired,
  logOut: PropTypes.any,
}

const mapStateToProps = (state) => {
  return ({
    homestate: state.homeReducer,
  })
}

const { logOut } = actions

const connected = connect(mapStateToProps, { logOut })(TabBarMenu)

export default connected
