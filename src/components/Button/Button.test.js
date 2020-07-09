import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button/Button.jsx';

describe('render basic button', () => {
  const wrapper = shallow(<Button button_id = "start_button" button_text = "Start" />);

  test('has one button with the correct id and text', () => {
    expect(wrapper.find('button')).toHaveLength(1);
    expect(wrapper.find('button').prop('id')).toBe("start_button");
    expect(wrapper.find('button').text()).toBe("Start");
  });
});

describe('render restart button', () => {
  const setSquares = jest.fn();
  const setSquaresSpy = jest.spyOn(React, 'useState');
  const wrapper = shallow(<Button button_id = "restart_button" button_text = "restart" onclick= {setSquares} />);

  test('restart board when clicked', () => {
    wrapper.find('#restart_button').simulate('click');
    expect(setSquares).toHaveBeenCalledWith();
  });
});
