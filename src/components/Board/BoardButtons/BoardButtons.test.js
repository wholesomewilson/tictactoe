import React from 'react';
import { render } from '@testing-library/react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import BoardButtons from './BoardButtons.jsx';
import Button from '../../Button/Button.jsx';
import StoreProvider from '../../../utils/store';


describe('render BoardButtons', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <StoreProvider>
        <Router>
          <BoardButtons />
        </Router>
      </StoreProvider>
    )
  });

  it('has 2 buttons', () => {
    expect(wrapper.find(Button)).toHaveLength(2);
  });
});
