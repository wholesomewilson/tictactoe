import React from 'react';
import { mount } from 'enzyme';
import App from './App.jsx';
import StartPage from '../../pages/StartPage/StartPage.jsx';
import StoreProvider from '../../utils/store';

describe("renders game start page", () => {
  const wrapper = mount(
    <StoreProvider>
      <App />
    </StoreProvider>
  );

  test('renders StartPage', () => {
    expect(wrapper.find(StartPage)).toHaveLength(1);
  });
});
