import React from 'react';
import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import BoardSquares from './BoardSquares.jsx'
import Square from '../../Square/Square.jsx';

describe('render BoardSquares', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BoardSquares />);
  });

  it('has 9 Squares', () => {
    expect(wrapper.find(Square)).toHaveLength(9);
  });
});
