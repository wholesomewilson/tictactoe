import React from 'react';

const PlayerInfoCard = ({symbol, name, score}) => {
  if (localStorage.getItem(`${symbol}_name`) != null){
    name = localStorage.getItem(`${symbol}_name`);
  };
  if (localStorage.getItem(`${symbol}_score`) != null){
    score = localStorage.getItem(`${symbol}_score`);
  };

  return (
    <div className="player_info">
      <div className="player_name" id={`${symbol}_name`}>{name}</div>
      <div className="player_score" id={`${symbol}_score`}>{score}</div>
    </div>
  )
}

export default PlayerInfoCard;
