import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import Board from './Board.jsx';
import Square from '../Square/Square.jsx';
import Button from '../Button/Button.jsx';
import GameStatus from '../GameStatus/GameStatus.jsx';
import BoardButtons from './BoardButtons/BoardButtons.jsx';
import BoardSquares from './BoardSquares/BoardSquares.jsx';
import StoreProvider from '../../utils/store';

describe('render Board', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <StoreProvider>
        <Router>
          <Board />
        </Router>
      </StoreProvider>);
  });

  it('has 9 Squares', () => {
    expect(wrapper.find(Square)).toHaveLength(9);
  });

  it('GameStatus is present', () => {
    expect(wrapper.find(GameStatus)).toHaveLength(1);
  });

  it('BoardButtons is present', () => {
    expect(wrapper.find(BoardButtons)).toHaveLength(1);
  });

  it('BoardSquares is present', () => {
    expect(wrapper.find(BoardSquares)).toHaveLength(1);
  });

  it('has two Button is present', () => {
    expect(wrapper.find(Button)).toHaveLength(2);
  });
});

describe('reacts according to game play', () => {
  const wrapper= mount(
    <StoreProvider>
      <Router>
        <Board />
      </Router>
    </StoreProvider>
  );

  it('render symbol according to player turn', () => {
    wrapper.find(Square).first().simulate('click');
    expect(wrapper.find('.board').text()).toContain('X');
    wrapper.find(Square).last().simulate('click');
    expect(wrapper.find('.board').text()).toContain('O');
  });
});
