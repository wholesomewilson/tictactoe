import React from 'react';
import PropTypes from 'prop-types';
import "./Square.css";

const Square = ({ i=0, setSquares, squares=Array(9).fill(null), isXnext, setIsXnext }) => {
  const value = squares[i];
  let nextSquares = squares.slice();

  return(
    <button
      className='square'
      onClick={() => {
        if (value == null) {
          nextSquares[i] = isXnext ? 'X' : 'O';
          setSquares(nextSquares)
          setIsXnext(!isXnext)
        }
      }}
    >{value}</button>
  );
};

Square.propTypes = {
  i: PropTypes.number,
  setSquares: PropTypes.func,
  squares: PropTypes.array,
  isXnext: PropTypes.bool,
  setIsXnext: PropTypes.func
}

export default Square;
