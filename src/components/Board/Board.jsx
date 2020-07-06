import React from 'react';
import Square from '../Square/Square.jsx';
import './Board.css';

const row = Array(3).fill("");

const Board = () => {
  return(
    <div className="container">
      <table className="board center">
        <tbody>
          {row.map( (e, i) => {
            return(
              <tr className="board_row" key={i}>
                {row.map((e,i) => <td key={"td_"+i}><Square key={"square_"+i} /></td>)}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Board;
