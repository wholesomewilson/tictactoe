import React from 'react';
import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import { Link } from 'react-router-dom';
import App from './App.jsx';
import StartPage from '../../pages/StartPage/StartPage.jsx';
import GamePage from '../../pages/GamePage/GamePage.jsx';
import StoreProvider, { StoreContext } from '../../utils/store';

describe("renders game start page", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <StoreProvider>
        <App />
      </StoreProvider>
    );
  });

  test('renders StartPage', () => {
    expect(wrapper.find(StartPage)).toHaveLength(1);
  });

})
