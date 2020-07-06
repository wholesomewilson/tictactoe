import React, { Fragment } from 'react';

const PlayerInfo = ({ player_info }) => {
  return(
    Object.keys(player_info).map( (key, value) => {
      return(
        <Fragment key={key}>
          <div className="player_name" key={key} id={`${key}_name`}>{player_info[key].name}</div>
          <div className="player_score" key={key} id={`${key}_score`}>{player_info[key].score}</div>
        </Fragment>
      )
    })
  )
};

export default PlayerInfo;
