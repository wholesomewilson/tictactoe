import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import Field from './Field';

describe('render label and input', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Field symbol='X' labelText='Player 1' />);
  });

  test('has input with correct id and type=text', () => {
    expect(wrapper.find('#X').props()).toHaveProperty('type', 'text');
  });

  test('has label with correct text and htmlFor', () => {
    expect(wrapper.find('label').props()).toHaveProperty('htmlFor', 'X')
    expect(wrapper.find("[htmlFor='X']").text()).toBe('Player 1');
  });

});
