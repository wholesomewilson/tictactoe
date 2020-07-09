import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import BoardButtons from './BoardButtons.jsx';
import Button from '../../Button/Button.jsx';
import StoreProvider from '../../../utils/store';

describe('render BoardButtons', () => {
  const wrapper = mount(
    <StoreProvider>
      <Router>
        <BoardButtons />
      </Router>
    </StoreProvider>
  );

  it('has 2 buttons', () => {
    expect(wrapper.find(Button)).toHaveLength(2);
  });
});
