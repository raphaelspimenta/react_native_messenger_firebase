import React from 'react'
import { shallow } from 'enzyme'
import Loader from '../'

describe('Loader', () => {
  it('should render', () => {
    const component = shallow(<Loader loading />)
    expect(component).toMatchSnapshot()
  })
})
