import React from 'react';
import './Field.css';

const Field = ({ symbol, labelText, handleChange, useref, val }) => {

  return(
    <div className="wrapper center">
      <label htmlFor={symbol}>{labelText}</label>
      <input
        ref={useref}
        id={symbol}
        type='text'
        onChange={handleChange}
        autoComplete="off"
        maxLength="16"
        value={val}
      >
      </input>
    </div>
  )
}

export default Field
