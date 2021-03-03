import React from 'react';
import './Square.css';

function Square(props) {
  return (
    <button className={`square ${props.index %2 ? 'square-light': 'square-dark'}`} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;