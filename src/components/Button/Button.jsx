import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({button_id, button_text, onclick}) =>
  <button
    className="general_button"
    id={button_id}
    onClick={onclick}
  >{button_text}</button>

Button.propTypes = {
  button_id: PropTypes.string,
  button_text: PropTypes.string,
  onclick: PropTypes.func
}

export default Button;
