import React from 'react';
import './Field.css';

const Field = ({ symbol, labelText, handleChange }) => {

  return(
    <div className="wrapper center">
      <label htmlFor={symbol}>{labelText}</label>
      <input id={symbol} type='text' onChange={handleChange} autoComplete="off" maxLength="16"></input>
    </div>
  )
}

export default Field
