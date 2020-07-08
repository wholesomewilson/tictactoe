import React from 'react';
import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import Square from './Square.jsx';

describe('render button with correct onclick', () => {
  let wrapper;
  let squares;
  const setSquares = jest.fn();
  const setSquaresSpy = jest.spyOn(React, 'useState');

  it('button is present', () => {
    wrapper = shallow(<Square />)
    expect(wrapper.find('button')).toHaveLength(1);
  });

  it('render text according to props', () => {
    wrapper = shallow(<Square i={0} squares={['X']} />)
    expect(wrapper.find('button').text()).toBe("X");
  });

  it('render text according to props', () => {
    wrapper = shallow(<Square i={0} squares={['O']} />)
    expect(wrapper.find('button').text()).toBe("O");
  });

  it('can only be clicked once per round', () => {
    squares = ["X", null, null, null, null, null, null, null, null];
    wrapper = shallow(<Square squares={squares} />);
    wrapper.find('button').simulate('click');
    expect(setSquares).not.toHaveBeenCalledWith();
  });

});
