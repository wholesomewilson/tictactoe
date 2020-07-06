import React from 'react';
import './PlayerInfo.css';

const default_player_info = {
  player_1: {
    name: "Player 1",
    score: 0
  },
  player_2: {
    name: "Player 2",
    score: 0
  }
}

const PlayerInfo = ({ player_info = default_player_info }) => {
  return(
    <div className="player_info_wrapper text-center">
      {Object.keys(player_info).map( (key, value) => {
        return(
          <div className="player_info" key={key}>
            <div className="player_name" key={`${key}_name`} id={`${key}_name`}>{player_info[key].name}</div>
            <div className="player_score" key={`${key}_score`} id={`${key}_score`}>{player_info[key].score}</div>
          </div>
        )
      })}
    </div>
  )
};

export default PlayerInfo;
