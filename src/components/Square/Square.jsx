import React from 'react';
import "./Square.css";

const Square = ({value = "", onclick = null}) => (
  <button className='square'>{value}</button>
)

export default Square;
