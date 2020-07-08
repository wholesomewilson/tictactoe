import React from 'react';
import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import StartPage from './StartPage';
import Field from '../../components/Field/Field.jsx';
import Button from '../../components/Button/Button.jsx';
import StoreProvider, { StoreContext } from '../../utils/store';


describe("renders game start page", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <StoreProvider>
        <Router>
          <StartPage />
        </Router>
      </StoreProvider>
    );
  })

  test('title is present', () => {
    expect(wrapper.find('h1').text()).toContain('Tic Tac Toe');
  });

  test('player labels and fields are present', () => {
    expect(wrapper.find(Field)).toHaveLength(2);
  });

  test('has a start button with correct button_text', () => {
    expect(wrapper.find(Link)).toHaveLength(1);
    expect(wrapper.find(Button).prop('button_text')).toBe("Start");
  })

});
