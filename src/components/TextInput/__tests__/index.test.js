import React from 'react'
import { shallow } from 'enzyme'
import { TextInput } from 'components'

describe('Button Component', () => {
  it('snapshot ', () => {
    const component = shallow(<TextInput placeholder="Digite aqui" />)
    expect(component).toMatchSnapshot()
  })
})
