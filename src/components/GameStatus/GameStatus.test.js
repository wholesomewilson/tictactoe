import React from 'react';
import { shallow, mount } from 'enzyme';
import GameStatus from './GameStatus.jsx';
import GameOver from './GameOver/GameOver.jsx';
import StoreProvider from '../../utils/store';
import LocalStorageMock from '../../utils/localStorageMock.js';

describe('render page with correct caption', ()  => {
  let wrapper;
  const localStorageMock = new LocalStorageMock;
  global.localStorage = localStorageMock;
  localStorage.setItem("X_name", "Player 1");
  localStorage.setItem("X_score", "0");
  const squaresWithWinner = ['X', 'X', 'X', null, null, null, null, null, null];
  const squaresWithDraw = ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', 'O'];

  it('render winner name', () => {
    wrapper = mount(<StoreProvider><GameStatus squares={squaresWithWinner} /></StoreProvider>);
    expect(wrapper.find('.game_over_wrapper').text()).toContain('Player 1');
    expect(wrapper.find('#restart_button')).toHaveLength(1);
  });

  it('render Draw! if board is full', () => {
    wrapper = mount(<StoreProvider><GameStatus squares={squaresWithDraw} /></StoreProvider>);
    expect(wrapper.find('.game_over_wrapper').text()).toContain('Draw!');
    expect(wrapper.find('#restart_button')).toHaveLength(1);
  });

  it('render Player 1 name when game starts', () => {
    wrapper = mount(<StoreProvider><GameStatus /></StoreProvider>);
    expect(wrapper.find('.next_player_caption').text()).toContain('X');
  });

  it('render Next Player name if game is not over', () => {
    let nextSymbol = "O";
    wrapper = mount(<StoreProvider><GameStatus nextSymbol={nextSymbol} /></StoreProvider>);
    expect(wrapper.find('.next_player_caption').text()).toContain('O');
  });

  it('render GameOver when there is a winner', () =>{
    wrapper = mount(<StoreProvider><GameStatus squares={squaresWithWinner}/></StoreProvider>);
    expect(wrapper.find(GameOver)).toHaveLength(1);
  });
});
