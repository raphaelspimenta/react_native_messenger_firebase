import { createStackNavigator } from 'react-navigation'

import Signin from 'containers/Signin'
import Signup from 'containers/Signup'
import Home from 'containers/Home'
import Contactlist from 'containers/Contactlist'
import Talklist from 'containers/Talklist'
import Contact from 'containers/Contact'
import Talk from 'containers/Talk'

import theme from './core/constants/theme'

const { colors } = theme

const navigationOptions = {
  headerStyle: {
    elevation: 0,
    borderBottomWidth: 0,
    backgroundColor: colors.primary,
  },
  headerTransparent: false,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  initialRouteName: Signin,
}

const Routes = createStackNavigator(
  {
    Signin,
    Signup,
    Home,
    Talklist,
    Contactlist,
    Contact,
    Talk,
  },
  { navigationOptions },
)

export default Routes
