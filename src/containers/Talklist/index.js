import React, { PureComponent } from 'react'
import { Text, View, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import map from 'lodash/map'
import Icon from 'react-native-vector-icons/FontAwesome'
import Loader from 'components/Loader'
import styles from 'core/constants/styles'
import { actions } from './action'

class Talklist extends PureComponent {

  componentDidMount() {
    const { talklistRequest } = this.props
    talklistRequest()
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
      talklist: {
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

Talklist.defaultProps = {
  talklistRequest: () => {},
  list: [],
  talklist: {
    requesting: false,
  },
}

Talklist.propTypes = {
  navigation: PropTypes.any.isRequired,
  talklistRequest: PropTypes.func,
  list: PropTypes.array,
  talklist: PropTypes.shape({
    requesting: PropTypes.bool,
  }),
}

const mapStateToProps = (state) => {
  const list = map(state.talklistReducer.talks, (val, uid) => {
    return { ...val, uid }
  })

  return ({
    list,
    talklist: state.talklistReducer,
  })
}

const { talklistRequest } = actions

const connected = connect(mapStateToProps, {
  talklistRequest,
})(Talklist)

export default connected
