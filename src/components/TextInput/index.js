import React, { PureComponent } from 'react'
import TextInputStyled from './styled'

class TextInput extends PureComponent {

  render() {
    return <TextInputStyled {...this.props} />
  }

}

export default TextInput
