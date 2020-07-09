import React from 'react';
import { shallow } from 'enzyme';
import BoardSquares from './BoardSquares.jsx';
import Square from '../../Square/Square.jsx';

describe('render BoardSquares', () => {
  const wrapper = shallow(<BoardSquares />);

  it('has 9 Squares', () => {
    expect(wrapper.find(Square)).toHaveLength(9);
  });
});
