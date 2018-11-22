import React, { PureComponent } from 'react'
import { View, Button } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import Loader from './'

const style = {
  flex: 1,
  alignContent: 'center',
}

class MyLoader extends PureComponent {

  state = {
    showLoader: false,
  }

  render() {
    const { showLoader } = this.state

    return (
      <View style={style}>
        <Button
          onPress={() => this.setState({ showLoader: true })}
          title="Click to Load"
          color="#841584"
          accessibilityLabel="Click to see the loader component"
        />
        <Loader loading={showLoader} />
      </View>
    )
  }

}

storiesOf('Loader', module)
  .add('Simple loader', () => <MyLoader />)
