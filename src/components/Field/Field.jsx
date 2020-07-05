import React from 'react';

const Field = ({ player, label }) => {
  return(
    <div>
      <label htmlFor={player}>{label}</label>
      <input id={player} type='text'></input>
    </div>
  )
}

export default Field
