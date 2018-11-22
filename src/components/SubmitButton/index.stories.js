import React from 'react'
import { storiesOf } from '@storybook/react-native'
import SubmitButton from './'

storiesOf('SubmitButton', module)
  .add('Simple submitbutton', () => <SubmitButton title="Just a button" />)
