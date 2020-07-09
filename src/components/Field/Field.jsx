import React from 'react';
import PropTypes from 'prop-types';
import './Field.css';

const Field = ({ symbol, labelText, handleChange, val }) => {
  return(
    <div className="wrapper center">
      <label htmlFor={symbol}>{labelText}</label>
      <input
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

Field.propTypes = {
  symbol: PropTypes.string,
  labelText: PropTypes.string,
  handleChange: PropTypes.func,
  val: PropTypes.string
}

export default Field
