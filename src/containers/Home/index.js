import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dimensions, SafeAreaView } from 'react-native'
import { TabView } from 'react-native-tab-view'
import PropTypes from 'prop-types'
import Talklist from 'containers/Talklist'
import Contactlist from 'containers/Contactlist'
import styles from 'core/constants/styles'
import TabBarMenu from './TabBarMenu'
import { actions } from './action'

class Home extends Component {

  static navigationOptions = {
    headerMode: 'screen',
    header: null,
  }

  _renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return <Talklist {...this.props} />
      case 'second':
        return <Contactlist {...this.props} />
      default:
        return null
    }
  }

  _handleIndexChange = (index) => {
    const { indexChange } = this.props
    indexChange(index)
  }

  _renderTabBar = props => <TabBarMenu {...props} {...this.props} />

  render() {

    const { homestate } = this.props

    return (
      <SafeAreaView style={styles.safeArea}>
        <TabView
          {...this.props}
          navigationState={homestate}
          renderScene={this._renderScene}
          renderTabBar={this._renderTabBar}
          onIndexChange={this._handleIndexChange}
          initialLayout={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
        />
      </SafeAreaView>
    )
  }

}

Home.defaultProps = {
  indexChange: () => { },
}

Home.propTypes = {
  navigation: PropTypes.any.isRequired,
  indexChange: PropTypes.func,
  homestate: PropTypes.any.isRequired,
}

const mapStateToProps = (state) => {
  return ({
    homestate: state.homeReducer,
  })
}

const { indexChange } = actions

const connected = connect(mapStateToProps, {
  indexChange,
})(Home)

export default connected
