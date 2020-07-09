import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Field from '../../components/Field/Field.jsx';
import Button from '../../components/Button/Button.jsx';
import { StoreContext } from '../../utils/store';
import { reset_game } from '../../helpers/gamelogic.js'

const StartPage = () => {
  const { playerInfo } = useContext(StoreContext);
  const [ playerState, setPlayerState ] = playerInfo;
  const {
    X: {
      name: player1Name
    },
    O: {
      name: player2Name
    }
  } = playerState;

  const handleChange = e => {
    const { id, value } = e.target;
    setPlayerState(prevState => {
      return { ...prevState, [id]: { ...prevState[id], name: value } }
    });
  }

  const handleClick = () => {
    reset_game(playerInfo);
  }

  return(
    <div className="text-center">
      <h1>Tic Tac Toe</h1>
      <Field symbol="X" labelText="Player 1" handleChange={handleChange} val={player1Name} />
      <Field symbol="O" labelText="Player 2" handleChange={handleChange} val={player2Name}/>
      <Link to='/game'>
        <Button button_text="Start" onclick={handleClick} />
      </Link>
    </div>
  )
}

export default StartPage;
