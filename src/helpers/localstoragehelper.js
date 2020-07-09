export const getLocalStorageItemIfExists = (symbol, key, playerState) => (
  localStorage.getItem(`${symbol}_${key}`) ?
    localStorage.getItem(`${symbol}_${key}`) : playerState[symbol][key]
);
