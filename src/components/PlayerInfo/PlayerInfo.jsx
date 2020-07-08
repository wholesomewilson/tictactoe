import React, { useContext } from 'react';
import './PlayerInfo.css';
import { StoreContext } from '../../utils/store';
import PlayerInfoCard from './PlayerInfoCard/PlayerInfoCard.jsx';

const PlayerInfo = () => {
  const { playerInfo } = useContext(StoreContext);
  const [ playerState ] = playerInfo;
  const {
    X: {
      name: player1Name,
      score: player1Score
    },
    O: {
      name: player2Name,
      score: player2Score
    }
  } = playerState;
  return(
    <div className="player_info_wrapper text-center">
      <PlayerInfoCard symbol="X" name={player1Name} score={player1Score}/>
      <PlayerInfoCard symbol="O" name={player2Name} score={player2Score}/>
    </div>
  )
};

export default PlayerInfo;
