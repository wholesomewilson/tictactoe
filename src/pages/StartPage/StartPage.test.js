import React from 'react';
import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import { Link } from 'react-router-dom';
import StartPage from './StartPage';
import Field from '../../components/Field/Field.jsx';
// import Button from '../../components/Button/Button.jsx';


describe("renders game start page", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<StartPage />);
  })

  test('title is present', () => {
    expect(wrapper.find('h1').text()).toContain('Tic Tac Toe');
  });

  test('player labels and fields are present', () => {
    expect(wrapper.find(Field)).toHaveLength(2);
  });

  test('has a start button with correct text', () => {
    expect(wrapper.find(Link)).toHaveLength(1);
    expect(wrapper.find(Link).text()).toBe("Start");
  })

});
