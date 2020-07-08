import React from 'react';
import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import GameOver from './GameOver.jsx';
import Button from '../../Button/Button.jsx';

describe('render page with correct caption and restart button', () => {
  let wrapper;

  it('render page with correct caption', () => {
    wrapper = shallow(<GameOver caption="Player 1"/>)
    expect(wrapper.find('.game_over_wrapper').text()).toContain("Player 1");
  })

  it('render page with restart button', () => {
    wrapper = mount(<GameOver />)
    expect(wrapper.find('#restart_button')).toHaveLength(1);
  })
})
