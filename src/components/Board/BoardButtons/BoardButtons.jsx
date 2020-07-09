import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Button/Button.jsx'
import { StoreContext } from '../../../utils/store';
import { reset_score_and_board, reset_game } from '../../../helpers/gamelogic.js';
import './BoardButtons.css';


const BoardButtons = ({ setSquares }) => {

  const { playerInfo } = useContext(StoreContext);

  const handleClickResetScoreBoard = () => {
    reset_score_and_board(playerInfo, setSquares)
  }

  const handleClickResetGame = () => {
    reset_game(playerInfo, setSquares)
  }

  return (
    <div className="board_buttons_wrapper">
      <div className="reset_button_wrapper">
        <Link to='/start'>
          <Button button_id="reset_game_button" button_text="Reset Game" onclick={handleClickResetGame} />
        </Link>
      </div>
      <div className="reset_button_wrapper">
        <Button button_id="reset_score_button" button_text="Reset Score" onclick={handleClickResetScoreBoard} />
      </div>
    </div>
  )
}

export default BoardButtons;
