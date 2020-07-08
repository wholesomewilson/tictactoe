import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Field from '../../components/Field/Field.jsx';
import Button from '../../components/Button/Button.jsx';
import { StoreContext } from '../../utils/store';

const StartPage = () => {

  const { playerInfo } = useContext(StoreContext);
  const [ ,setPlayerState ] = playerInfo;

  const handleChange = e => {
    const { id, value } = e.target;

    setPlayerState(prevState => {
      return { ...prevState, [id]: { ...prevState[id], name: value } }
    });
  }

  return(
    <div className="text-center">
      <h1>Tic Tac Toe</h1>
      <Field symbol="X" labelText="Player 1" handleChange={handleChange}/>
      <Field symbol="O" labelText="Player 2" handleChange={handleChange}/>
      <Link to='/game'>
        <Button button_text="Start" />
      </Link>
    </div>
  )
}

export default StartPage;
