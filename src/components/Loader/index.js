import React from 'react'
import { Modal, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'
import { ModalBackground, ModalWrapper } from './styled'

const Loader = (props) => {
  const { loading } = props

  return (
    <Modal
      transparent
      animationType="none"
      visible={loading}
      onRequestClose={() => {}}
    >
      <ModalBackground>
        <ModalWrapper>
          <ActivityIndicator
            animating={loading}
          />
        </ModalWrapper>
      </ModalBackground>
    </Modal>
  )
}

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
}

export default Loader
