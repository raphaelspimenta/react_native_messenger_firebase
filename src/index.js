import React, { Component } from 'react'
import { View } from 'react-native'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import FlashMessage from 'react-native-flash-message'
import theme from 'core/constants/theme'
import NavigationService from 'core/utils/navigationService'
import Firebase from 'services/firebase'
import store from 'store'
import Router from './routes'

const mainStyle = {
  flex: 1,
}

class App extends Component {

  constructor(props) {
    super(props)
    Firebase.init()
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <View style={mainStyle}>
            <Router
              ref={(navigatorRef) => {
                NavigationService.setTopLevelNavigator(navigatorRef)
              }}
            />
            <FlashMessage position="top" />
          </View>
        </Provider>
      </ThemeProvider>
    )
  }

}

export default App
