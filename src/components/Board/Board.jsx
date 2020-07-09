import React, { useState, useContext } from 'react';
import Square from '../Square/Square.jsx';
import Button from '../Button/Button.jsx';
import GameStatus from '../GameStatus/GameStatus.jsx';
import { StoreContext } from '../../utils/store';
import { reset_score_and_board } from '../../helpers/gamelogic.js';
import './Board.css';

const Board = () => {

  const { playerInfo } = useContext(StoreContext);
  const row = Array(3).fill("");
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXnext, setIsXnext] = useState(true);
  const nextSymbol = isXnext ? "X" : "O";
  let square_num = 0;

  const handleClick = () => {
    reset_score_and_board(playerInfo, setSquares)
  }

  return(
    <div className="board text-center">
      <GameStatus squares={squares} setSquares={setSquares} nextSymbol={nextSymbol}/>
      <table className="center">
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
      <Button button_id="reset_score_button" button_text="Reset" onclick={handleClick} />
    </div>
  );
};

export default Board;
