import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import SubmitButtonStyled from './styled'

class SubmitButton extends PureComponent {

  render() {
    const { onPress } = this.props

    return <SubmitButtonStyled {...this.props} onPress={onPress} />
  }

}

SubmitButton.propTypes = {
  onPress: PropTypes.func.isRequired,
}

export default SubmitButton
