import React from 'react';
import PropTypes from 'prop-types';
import Square from '../../Square/Square.jsx';
import './BoardSquares.css';

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

BoardSquares.propTypes = {
  squares: PropTypes.array,
  setSquares: PropTypes.func,
  isXnext: PropTypes.bool,
  setIsXnext: PropTypes.func
}

export default BoardSquares;
