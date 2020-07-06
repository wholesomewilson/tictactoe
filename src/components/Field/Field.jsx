import React from 'react';
import './Field.css';

const Field = ({ player, label }) => {
  return(
    <div className="wrapper center">
      <label htmlFor={player}>{label}</label>
      <input id={player} type='text'></input>
    </div>
  )
}

export default Field
