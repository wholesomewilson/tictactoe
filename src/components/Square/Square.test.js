import React from 'react';
import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import Square from './Square.jsx';

describe('render button with correct onclick', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Square value="X" />)
  })

  it('button is present', () => {
    expect(wrapper.find('button')).toHaveLength(1);
  });

  it('render text according to props', () => {
    expect(wrapper.find('button').text()).toBe("X");
  });
});
