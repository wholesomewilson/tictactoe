import React, { useContext } from 'react';
import { get_winner, is_board_full, reset_board } from '../../helpers/gamelogic.js';
import './GameStatus.css';
import GameOver from './GameOver/GameOver.jsx';
import { StoreContext } from '../../utils/store';

const GameStatus = ({ squares=Array(9).fill(null), setSquares=null, nextSymbol= "X" }) => {
  const { playerInfo } = useContext(StoreContext);
  const [ playerState, setPlayerState ] = playerInfo;
  const winner = get_winner(squares);
  const isBoardFull = is_board_full(squares);
  const nextPlayerCaption = `${playerState[nextSymbol]['name']}'s turn! ( ${nextSymbol} )`;
  const handleReset = () => {
    reset_board(setSquares, setPlayerState, winner);
  }

  return(
    <div>
      {winner ? <GameOver caption={`Winner - ${playerState[winner]["name"]}`} onclick={handleReset} />
        : isBoardFull ? <GameOver caption='Draw!' onclick={handleReset}/>
        : <div className="next_player_caption">{nextPlayerCaption}</div>
      }
    </div>
  );
};

export default GameStatus;
