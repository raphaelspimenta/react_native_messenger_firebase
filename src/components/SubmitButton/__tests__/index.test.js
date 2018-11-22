import React from 'react'
import { shallow } from 'enzyme'
import { SubmitButton } from 'components'

describe('Button Component', () => {
  it('snapshot ', () => {
    const component = shallow(<SubmitButton title="Just a button" onPress={() => {}} />)
    expect(component).toMatchSnapshot()
  })
})
