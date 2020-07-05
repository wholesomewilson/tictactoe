import React from 'react';
import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import Button from '../Button/Button.jsx';

describe('render button', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Button button_id = "start_button" button_text = "Start" />);
  })

  test('has one button with the correct id and text', () => {
    expect(wrapper.find('button')).toHaveLength(1);
    expect(wrapper.find('button').prop('id')).toBe("start_button");
    expect(wrapper.find('button').text()).toBe("Start");
  });

});
