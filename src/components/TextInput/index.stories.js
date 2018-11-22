import React from 'react'
import { storiesOf } from '@storybook/react-native'
import TextInput from './'

storiesOf('TextInput', module)
  .add('Simple textinput', () => <TextInput placeholder="Test.." />)
