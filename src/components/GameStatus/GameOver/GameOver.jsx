import React from 'react';
import Button from '../../Button/Button.jsx'
import './GameOver.css';

const GameOver = ({ caption, setSquares=null }) => {
  return(
    <div className="game_over_overlay">
      <div className="game_over_wrapper">
        <div className="game_over_caption">{caption}</div>
        <Button button_id="restart_button" button_text="restart" onclick={setSquares} />
      </div>
    </div>
  )
}

export default GameOver;
