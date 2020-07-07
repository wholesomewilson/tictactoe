import React from 'react';
import { get_winner, is_board_full } from '../../helpers/gamelogic.js';

const GameStatus = ({ squares=Array(9).fill(null), nextPlayer={name: "Player 1", symbol: "X"} }) => {
  const winner = get_winner(squares);
  const isBoardFull = is_board_full(squares);
  const nextPlayerCaption = `${nextPlayer.name} ${nextPlayer.symbol}`
  const status = winner ? winner : isBoardFull ? 'Draw!' : nextPlayerCaption;
  return(
    <div>
      {status}
    </div>
  );
};

export default GameStatus;
