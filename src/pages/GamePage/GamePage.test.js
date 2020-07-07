import React from 'react';
import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import GamePage from './GamePage.jsx';
import PlayerInfo from '../../components/PlayerInfo/PlayerInfo.jsx';
import Board from '../../components/Board/Board.jsx';
import GameStatus from '../../components/GameStatus/GameStatus.jsx';


describe("renders game start page", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<GamePage />);
  });

  test('PlayerInfo, GameStatus and Board are present', () => {
    expect(wrapper.find(PlayerInfo)).toHaveLength(1);
    expect(wrapper.find(Board)).toHaveLength(1);
  });
});
