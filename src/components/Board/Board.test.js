import React from 'react';
import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import Board from './Board.jsx';
import Square from '../Square/Square.jsx';
import GameStatus from '../GameStatus/GameStatus.jsx';

describe('render Board', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Board />);
  });

  it('has 9 Squares', () => {
    expect(wrapper.find(Square)).toHaveLength(9);
  });

  it('GameStatus is present', () => {
    expect(wrapper.find(GameStatus)).toHaveLength(1);
  });
});

describe('reacts according to game play', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Board />);
  })

  it('render symbol according to player turn', () => {
    wrapper.find(Square).first().simulate('click');
    expect(wrapper.find('.board').text()).toContain('X')
    wrapper.find(Square).last().simulate('click');
    expect(wrapper.find('.board').text()).toContain('O')
  });

});
