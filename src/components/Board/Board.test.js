import React from 'react';
import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import Board from './Board.jsx';
import Square from '../Square/Square.jsx';
import GameStatus from '../GameStatus/GameStatus.jsx';
import StoreProvider from '../../utils/store';

describe('render Board', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<StoreProvider><Board /></StoreProvider>);
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
    wrapper = mount(<StoreProvider><Board /></StoreProvider>);
  })

  it('render symbol according to player turn', () => {
    wrapper.find(Square).first().simulate('click');
    expect(wrapper.find('.board').text()).toContain('X')
    wrapper.find(Square).last().simulate('click');
    expect(wrapper.find('.board').text()).toContain('O')
  });

});
