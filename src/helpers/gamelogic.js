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
    };
  };
  return null;
};

export const is_board_full = (squares) => {
  for(let i=0; i < squares.length; i++){
    if(squares[i] == null){
      return false;
    };
  };
  return true;
};

export const reset_board = (setSquares, setPlayerState, winner) => {
  const squares = Array(9).fill(null);
  let newScore;

  setSquares(squares);
  if(winner){
    setPlayerState( prevState => {
      newScore = prevState[winner]['score']+1
      localStorage.setItem(`${winner}_score`, newScore)
      return {
        ...prevState, [winner]:{
          ...prevState[winner], score: newScore
        }
      };
    });
  };
};

export const reset_game = ([playerState, setPlayerState]) => {
  Object.keys(playerState).forEach( (key) => {
    setPlayerState(prevState => {
      return { ...prevState, [key]: { ...prevState[key], score: 0 } }
    });
    localStorage.setItem(`${key}_name`, playerState[key]['name']);
    localStorage.setItem(`${key}_score`, 0);
  });
};

export const reset_score_and_board = ([playerState, setPlayerState], setSquares) => {
  setSquares(Array(9).fill(null));
  Object.keys(playerState).forEach( (key) => {
    setPlayerState(prevState => {
      return { ...prevState, [key]: { ...prevState[key], score: 0 } }
    });
    localStorage.setItem(`${key}_score`, 0);
  });
};
