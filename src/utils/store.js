import React, { useState } from 'react';

export const StoreContext = React.createContext(null)

export default ({ children }) => {
  const defaultPlayerInfo = {
    X: {
      name: "Player 1",
      score: 0
    },
    O: {
      name: "Player 2",
      score: 0
    }
  };
  const [playerState, setPlayerState] = useState(defaultPlayerInfo);

  const store = {
    playerInfo: [playerState, setPlayerState],
    sharing: "hello"
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}
