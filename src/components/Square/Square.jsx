import React from 'react';
import "./Square.css";

const Square = ({i = 0, setSquares = null, squares = [], isXnext, setIsXnext}) => {
  const value = squares[i];
  let nextSquares = squares.slice();

  return(
    <button
      className='square'
      onClick={() => {
        nextSquares[i] = isXnext ? 'X' : 'O';
        setSquares(nextSquares)
        setIsXnext(!isXnext)
      }}
    >{value}</button>
  )

}

export default Square;
