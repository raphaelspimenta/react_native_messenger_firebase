import React from 'react'

import { storiesOf } from '@storybook/react-native'
import { linkTo } from '@storybook/addon-links'

import Home from './Home'

storiesOf('Home', module).add('to Storybook', () => <Home showApp={linkTo('SubmitButton')} />)
