import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button/Button.jsx'
import './GameOver.css';

const GameOver = ({ caption, onclick }) => {
  return(
    <div className="game_over_overlay">
      <div className="game_over_wrapper">
        <div className="game_over_caption">{caption}</div>
        <Button button_id="restart_button" button_text="Play Again!" onclick={onclick} />
      </div>
    </div>
  );
};

GameOver.propTypes = {
  caption: PropTypes.string,
  onclick: PropTypes.func
}

export default GameOver;
