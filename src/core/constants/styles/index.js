import { StyleSheet } from 'react-native'
import theme from '../theme'

const { colors } = theme

const stylesTalk = StyleSheet.create({
  mainList: {
    display: 'flex',
    flexDirection: 'row',
  },
  sent: {
    justifyContent: 'flex-end',
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: colors.elivedrab,
    borderRadius: 15,
    marginLeft: 40,
    marginRight: 10,
  },
  received: {
    justifyContent: 'flex-start',
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: colors.primary,
    borderRadius: 15,
    marginRight: 40,
    marginLeft: 10,
  },
  message: {
    fontSize: 18,
    padding: 10,
    color: colors.white,
    elevation: 1,
  },
})

const stylesHome = StyleSheet.create({
  tabbarbuttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabbarlabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  tabbarText: {
    height: 50,
    color: colors.white,
    fontSize: 20,
    padding: 10,
    fontStyle: 'italic',
  },
  tabbarIcon: {
    color: colors.white,
    padding: 10,
  },
  list: {
    padding: 10,
  },
  nameList: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  mainList: {
    flexDirection: 'row',
  },
  iconList: {
    padding: 5,
    marginRight: 10,
  },
  textList: {
    padding: 15,
    borderBottomWidth: 0.5,
    borderColor: colors.elivedrab,
  },
  viewTalk: {
    flex: 2,
    backgroundColor: colors.white,
  },
  viewButtons: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: colors.white,
  },
  textTalk: {
    flex: 6,
    fontSize: 18,
    borderColor: colors.white,
    borderRadius: 20,
    margin: 5,
    padding: 15,
  },
  sendTalk: {
    flex: 1,
    padding: 20,
  },
})

const stylesLogin = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },
  viewHeader: {
    flex: 1,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader: {
    fontSize: 25,
    color: colors.darkslategrey,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  viewForm: {
    flex: 2,
    padding: 30,
  },
  textInput: {
    fontSize: 20,
    height: 45,
  },
  passInput: {
    fontSize: 20,
    height: 45,
  },
  labelInfo: {
    marginTop: 20,
    color: colors.darkslategrey,
  },
  viewButton: {
    flex: 2,
    margin: 20,
  },
  btnForm: {
    backgroundColor: colors.darkgreen,
  },
  messages: {
    fontSize: 18,
    padding: 20,
    margin: 30,
  },
})

const styles = {
  stylesHome,
  stylesLogin,
  stylesTalk,
  safeArea: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingTop: 60,
  },
}

export default styles
