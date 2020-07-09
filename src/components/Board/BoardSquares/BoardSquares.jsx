import React from 'react';
import Square from '../../Square/Square.jsx';

const BoardSquares = ({ squares, setSquares, isXnext, setIsXnext }) => {
  const row = Array(3).fill("");
  let square_num = 0;

  return (
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
  );
};

export default BoardSquares;
