import React from 'react';

const PlayerInfoCard = ({symbol, name, score}) => {
  return (
    <div className="player_info">
      <div className="player_name" id={`${symbol}_name`}>{name}</div>
      <div className="player_score" id={`${symbol}_score`}>{score}</div>
    </div>
  )
}

export default PlayerInfoCard;
