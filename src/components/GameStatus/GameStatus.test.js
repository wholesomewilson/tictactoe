import React from 'react';
import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import GameStatus from './GameStatus.jsx'

describe('render page with correct status', ()  => {
  let wrapper;
  let squares;
  let nextPlayer;

  it('render winner name', () => {
    squares = ['X', 'X', 'X', null, null, null, null, null, null];
    wrapper = shallow(<GameStatus squares={squares} />)
    expect(wrapper.find('div').text()).toContain('Player 1');
  });

  it('render Draw! if board is full', () => {
    squares = ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', 'O'];
    wrapper = shallow(<GameStatus squares={squares} />)
    expect(wrapper.find('div').text()).toContain('Draw!');
  });

  it('render Next Player name if game is not over', () => {
    nextPlayer = {name: "Player 1", symbol: "X"};
    wrapper = shallow(<GameStatus nextPlayer={nextPlayer} />)
    expect(wrapper.find('div').text()).toContain('X');
  });

  it('render Next Player name if game is not over', () => {
    squares = ['O', null, null, null, null, null, null, null, null];
    nextPlayer = {name: "Player 2", symbol: "O"};
    wrapper = shallow(<GameStatus squares={squares} nextPlayer={nextPlayer} />)
    expect(wrapper.find('div').text()).toContain('O');
  });
});
