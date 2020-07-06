import React from 'react';
import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import PlayerInfo from './PlayerInfo.jsx';

describe('render player names', () => {
  let wrapper;
  const player_info_mock = {
    player_1: {
      name: "Avery",
      score: 0
    },
    player_2: {
      name: "Jessica",
      score: 0
    }
  };

  beforeEach(() => {
    wrapper = shallow(<PlayerInfo player_info={player_info_mock} />);
  });

  it('has two player names', () => {
    expect(wrapper.find('.player_name')).toHaveLength(2)
  });

  it('render the correct names', () => {
    expect(wrapper.find('#player_1_name').text()).toBe(player_info_mock.player_1.name)
    expect(wrapper.find('#player_2_name').text()).toBe(player_info_mock.player_2.name)
  });

  it('render the correct scores', () => {
    expect(wrapper.find('#player_1_score').text()).toBe(player_info_mock.player_1.score.toString())
    expect(wrapper.find('#player_2_score').text()).toBe(player_info_mock.player_2.score.toString())
  });

});
