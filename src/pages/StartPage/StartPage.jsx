import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Field from '../../components/Field/Field.jsx';
import Button from '../../components/Button/Button.jsx';

const StartPage = () => {
  const [playerNames, setPlayerNames] = useState({player_1: "", player_2: ""})
  return(
    <div className="text-center">
      <h1>Tic Tac Toe</h1>
      <Field player="player_1" label="Player 1" />
      <Field player="player_2" label="Player 2" />
      <Link to='/game'>
        <Button button_text="Start" />
      </Link>
    </div>
  )
}

export default StartPage;
