import React, { useContext } from 'react';
import { get_winner, is_board_full, reset_board } from '../../helpers/gamelogic.js';
import './GameStatus.css';
import GameOver from './GameOver/GameOver.jsx';
import { StoreContext } from '../../utils/store';
import { getLocalStorageItemIfExists } from '../../helpers/localstoragehelper.js';

const GameStatus = ({ squares=Array(9).fill(null), setSquares=null, nextSymbol= "X" }) => {
  const { playerInfo } = useContext(StoreContext);
  const [ playerState, setPlayerState ] = playerInfo;
  const winnerSymbol = get_winner(squares);
  const nextPlayerName = getLocalStorageItemIfExists(nextSymbol, "name", playerState);
  const getWinnerName = () => (
    getLocalStorageItemIfExists(winnerSymbol, "name", playerState)
  );
  const isBoardFull = is_board_full(squares);
  const nextPlayerCaption = `${nextPlayerName}'s turn! ( ${nextSymbol} )`;
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
