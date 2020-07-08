export const get_winner = (squares) => {
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for(let i = 0; i < winningLines.length; i++){
    const [a, b, c] = winningLines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a]
    }
  }
  return null;
}

export const is_board_full = (squares) => {
  for(let i=0; i < squares.length; i++){
    if(squares[i] == null){
      return false;
    }
  }
  return true;
}

export const reset_board = (setSquares, setPlayerState, winner) => {
  const squares = Array(9).fill(null);
  setSquares(squares);
  if(winner){
    setPlayerState( prevState => {
      return {
        ...prevState, [winner]:{
          ...prevState[winner], score: prevState[winner]['score']+1
        }
      }
    });
  };
}
