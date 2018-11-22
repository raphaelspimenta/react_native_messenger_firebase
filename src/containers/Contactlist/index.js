import React, { PureComponent } from 'react'
import { Text, View, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Icon from 'react-native-vector-icons/FontAwesome'
import Loader from 'components/Loader'
import styles from 'core/constants/styles'
import { actions } from './action'

class Contactlist extends PureComponent {

  componentDidMount() {
    const { contactlistRequest } = this.props
    contactlistRequest()
  }

  _goTalk = (item) => {
    const { navigation } = this.props
    navigation.navigate('Talk', {
      user: item,
    })
  }

  _renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.stylesHome.textList}
      onPress={() => this._goTalk(item)}
    >
      <View style={styles.stylesHome.mainList}>
        <View style={styles.stylesHome.iconList}>
          <Icon name="user" size={30} />
        </View>
        <View>
          <Text style={styles.stylesHome.nameList}>{item.name}</Text>
          <Text>{item.email}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )

  _keyExtractor = item => item.uid

  render() {

    const {
      contactlist: {
        requesting,
      },
      list,
    } = this.props

    return (
      <View style={styles.stylesLogin.main}>
        <Loader loading={requesting} />
        <View style={styles.stylesHome.list}>
          <FlatList
            data={list}
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
          />
        </View>
      </View>
    )

  }

}

Contactlist.defaultProps = {
  contactlistRequest: () => {},
  list: [],
  contactlist: {
    requesting: false,
  },
}

Contactlist.propTypes = {
  navigation: PropTypes.any.isRequired,
  contactlistRequest: PropTypes.func,
  list: PropTypes.array,
  contactlist: PropTypes.shape({
    requesting: PropTypes.bool,
  }),
}

const mapStateToProps = (state) => {
  const list = _.map(state.contactlistReducer.contacts, (val, uid) => {
    return { ...val, uid }
  })

  return ({
    list,
    contactlist: state.contactlistReducer,
  })
}

const { contactlistRequest } = actions

const connected = connect(mapStateToProps, {
  contactlistRequest,
})(Contactlist)

export default connected
