import React, { useState } from 'react';
import Square from '../Square/Square.jsx';
import GameStatus from '../GameStatus/GameStatus.jsx';
import './Board.css';

const Board = () => {

  const row = Array(3).fill("");
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXnext, setIsXnext] = useState(true);
  const nextSymbol = isXnext ? "X" : "O";
  let square_num = 0;

  return(
    <div className="container text-center">
      <GameStatus squares={squares} setSquares={setSquares} nextSymbol={nextSymbol}/>
      <table className="board center">
        <tbody>
          {row.map( (e, i) => {
            return(
              <tr className="board_row" key={i}>
                {row.map((e,i) =>
                  <td key={"td_"+i} id={i}>
                    <Square
                      key={"square_"+i}
                      i={square_num++}
                      squares={squares}
                      setSquares={setSquares}
                      isXnext={isXnext}
                      setIsXnext={setIsXnext}
                    />
                  </td>
                )}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Board;
