import React from 'react';
import { shallow } from 'enzyme';
import PlayerInfoCard from './PlayerInfoCard.jsx';
import LocalStorageMock from '../../../utils/localStorageMock.js';

describe("renders page correctly", () => {
  const localStorageMock = new LocalStorageMock;
  global.localStorage = localStorageMock;
  localStorage.setItem("X_name", "Player 1");
  localStorage.setItem("X_score", "0");
  const wrapper = shallow(<PlayerInfoCard symbol="X"/>);

  test('player name is present', () => {
    expect(wrapper.find('#X_name').text()).toBe("Player 1");
  });

  test('player score is present', () => {
    expect(wrapper.find('#X_score').text()).toBe("0")
  });
});
