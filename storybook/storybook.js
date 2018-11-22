import { AppRegistry } from 'react-native'
import { getStorybookUI, configure } from '@storybook/react-native'
import { loadStories } from './storyLoader'
import { name as appName } from '../app.json'

configure(() => {
  loadStories()
}, module)

const StorybookUI = getStorybookUI({
  port: 7007,
  host: 'localhost',
  onDeviceUI: true,
  resetStorybook: true,
})

AppRegistry.registerComponent(appName, () => StorybookUI)

export { StorybookUI as default }
