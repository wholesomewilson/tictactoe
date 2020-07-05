import React from 'react';
import Field from '../Field/Field.jsx';
import Button from '../Button/Button.jsx';

const StartPage = () => {
  return(
    <div>
      <h1>Tic Tac Toe</h1>
      <Field player="player_1" label="Player 1" />
      <Field player="player_2" label="Player 2" />
      <Button button_id = "start_button" button_text = "Start"/>
    </div>
  )
}

export default StartPage;
