import React from 'react';
import './Button.css';

const Button = ({button_id, button_text, onclick=null}) =>
  <button
    className="general_button"
    id={button_id}
    onClick={onclick}
  >{button_text}</button>

export default Button;
