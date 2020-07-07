import React from 'react';
import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import Board from './Board.jsx';
import Square from '../Square/Square.jsx';

describe('render Board', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Board />);
  });

  it('has 9 Squares', () => {
    expect(wrapper.find(Square)).toHaveLength(9);
  });
});

describe('reacts according to game play', () => {
  let wrapper;
  const setSquares = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation((init) => [init, setSquares]);

  beforeEach(() => {
    wrapper = mount(<Board />);
  })

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('render symbol according to player turn', () => {
    wrapper.find(Square).first().simulate('click');
    expect(wrapper.find('.board').text()).toContain('X')
    wrapper.find(Square).last().simulate('click');
    expect(wrapper.find('.board').text()).toContain('O')
  });
  
});
