import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import Field from './Field';

describe('render label and input', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Field player='player_1' label='Player 1' />);
  });

  test('has input with correct id and type=text', () => {
    expect(wrapper.find('#player_1').props()).toHaveProperty('type', 'text');
  });

  test('has label with correct text and htmlFor', () => {
    expect(wrapper.find("[htmlFor='player_1']").text()).toBe('Player 1');
    expect(wrapper.find('label').props()).toHaveProperty('htmlFor', 'player_1')
  });

});
