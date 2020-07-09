import React, { useContext } from 'react';
import { StoreContext } from '../../utils/store';
import GameOver from './GameOver/GameOver.jsx';
import { getLocalStorageItemIfExists } from '../../helpers/localstoragehelper.js';
import { get_winner, is_board_full, reset_board } from '../../helpers/gamelogic.js';
import './GameStatus.css';

const GameStatus = ({ squares=Array(9).fill(null), setSquares=null, nextSymbol= "X" }) => {
  const { playerInfo } = useContext(StoreContext);
  const [ playerState, setPlayerState ] = playerInfo;
  const winnerSymbol = get_winner(squares);
  const isBoardFull = is_board_full(squares);
  const nextPlayerName = getLocalStorageItemIfExists(nextSymbol, "name", playerState);
  const nextPlayerCaption = `${nextPlayerName}'s turn! ( ${nextSymbol} )`;

  const getWinnerName = () => (
    getLocalStorageItemIfExists(winnerSymbol, "name", playerState)
  );
  
  const handleReset = () => {
    reset_board(setSquares, setPlayerState, winnerSymbol);
  };

  return(
    <div>
      {winnerSymbol ? <GameOver caption={`Winner - ${getWinnerName()}`} onclick={handleReset} />
        : isBoardFull ? <GameOver caption='Draw!' onclick={handleReset}/>
        : <div className="next_player_caption">{nextPlayerCaption}</div>
      }
    </div>
  );
};

export default GameStatus;
