import React from 'react';
import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import PlayerInfoCard from './PlayerInfoCard.jsx';

describe("renders page correctly", () => {

  const wrapper = shallow(<PlayerInfoCard symbol="X" name="Player 1" score={0}/>)

  test('player name is present', () => {
    expect(wrapper.find('#X_name').text()).toBe("Player 1")
  });

  test('player score is present', () => {
    expect(wrapper.find('#X_score').text()).toBe("0")
  });

});
