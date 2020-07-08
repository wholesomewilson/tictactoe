import React from 'react';
import { get_winner, is_board_full } from '../../helpers/gamelogic.js';
import GameOver from './GameOver/GameOver.jsx';

const GameStatus = ({ squares = Array(9).fill(null), setSquares=null, nextSymbol= "X", players = {X: "Player 1", O: "Player 2"} }) => {
  const winner = get_winner(squares);
  const isBoardFull = is_board_full(squares);
  const nextPlayerCaption = `${players[nextSymbol]} ${nextSymbol}`;
  const resetBoard = () => {
    squares = Array(9).fill(null);
    setSquares(squares);
  }

  return(
    <div>
      {winner ? <GameOver caption={`Winner - ${players[winner]}`} setSquares={resetBoard} />
        : isBoardFull ? <GameOver caption='Draw!' setSquares={resetBoard}/>
        : nextPlayerCaption
      }
    </div>
  );
};

export default GameStatus;
