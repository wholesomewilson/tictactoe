import React from 'react';
import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import Board from './Board.jsx';
import Square from '../Square/Square.jsx';

describe('render Board', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Board />)
  });

  it('has 9 Squares', () =>{
    expect(wrapper.find(Square)).toHaveLength(9);
  })
});
