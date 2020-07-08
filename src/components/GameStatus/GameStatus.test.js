import React from 'react';
import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import GameStatus from './GameStatus.jsx';
import GameOver from './GameOver/GameOver.jsx';

describe('render page with correct caption', ()  => {
  let wrapper;
  const squaresWithWinner = ['X', 'X', 'X', null, null, null, null, null, null];
  const squaresWithDraw = ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', 'O'];

  it('render winner name', () => {
    wrapper = mount(<GameStatus squares={squaresWithWinner} />)
    expect(wrapper.find('.game_over_wrapper').text()).toContain('Player 1');
    expect(wrapper.find('#restart_button')).toHaveLength(1);
  });

  it('render Draw! if board is full', () => {
    wrapper = mount(<GameStatus squares={squaresWithDraw} />)
    expect(wrapper.find('.game_over_wrapper').text()).toContain('Draw!');
    expect(wrapper.find('#restart_button')).toHaveLength(1);
  });

  it('render Player 1 name when game starts', () => {
    wrapper = shallow(<GameStatus />)
    expect(wrapper.find('div').text()).toContain('X');
  });

  it('render Next Player name if game is not over', () => {
    let nextSymbol = "O";
    wrapper = shallow(<GameStatus nextSymbol={nextSymbol} />)
    expect(wrapper.find('div').text()).toContain('O');
  });

  it('render GameOver when there is a winner', () =>{
    wrapper = shallow(<GameStatus squares={squaresWithWinner}/>);
    expect(wrapper.find(GameOver)).toHaveLength(1);
  })
});
