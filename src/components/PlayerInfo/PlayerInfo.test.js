import React, { useContext } from 'react';
import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import PlayerInfo from './PlayerInfo.jsx';
import StoreProvider from '../../utils/store';

describe('render player names', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <StoreProvider>
        <PlayerInfo />
      </StoreProvider>
    );
  });

  it('has two player names', () => {
    expect(wrapper.find('.player_name')).toHaveLength(2)
  });

  it('render the correct names', () => {
    expect(wrapper.find('#X_name').text()).toBe("Player 1");
    expect(wrapper.find('#O_name').text()).toBe("Player 2");
  });

  it('render the correct scores', () => {
    expect(wrapper.find('#X_score').text()).toBe("0")
    expect(wrapper.find('#O_score').text()).toBe("0")
  });

});
