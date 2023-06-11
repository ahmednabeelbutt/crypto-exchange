export const trasnferCoins = (transfer_details) => ({
  type: 'TRANSFER_COINS',
  payload: { transfer_details },
});

export const addUser = (user) => ({
    type: 'ADD_USER',
    payload: { user },
});

export const setLoggedInUser = (user) => ({
  type: 'SET_LOGIN',
  payload: { user },
});

export const setSelectedCoin = (coin) => ({
  type: 'SET_SELECTED_COIN',
  payload: { coin },
});