import React from 'react';
import './Button.css';

const Button = ({button_id, button_text}) => <button className="general_button" id={button_id}>{button_text}</button>

export default Button;
