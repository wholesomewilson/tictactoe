import React from 'react';
import PlayerInfo from '../../components/PlayerInfo/PlayerInfo.jsx';
import Board from '../../components/Board/Board.jsx';

const GamePage = () => {
  return(
    <div>
      <h1>Game Page</h1>
      <PlayerInfo />
      <Board />
    </div>
  );
};

export default GamePage;
