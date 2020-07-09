import React, { useState } from 'react';
import BoardButtons from './BoardButtons/BoardButtons.jsx';
import BoardSquares from './BoardSquares/BoardSquares.jsx';
import GameStatus from '../GameStatus/GameStatus.jsx';
import './Board.css';

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXnext, setIsXnext] = useState(true);
  const nextSymbol = isXnext ? "X" : "O";

  return(
    <div className="board text-center">
      <GameStatus squares={squares} setSquares={setSquares} nextSymbol={nextSymbol}/>
      <BoardSquares squares={squares} setSquares={setSquares} isXnext={isXnext} setIsXnext={setIsXnext}/>
      <BoardButtons setSquares={setSquares} />
    </div>
  );
};

export default Board;
