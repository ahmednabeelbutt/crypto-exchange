const initialState = {
    users: [
    {
      name: "Ahmad",
      email: "ahmad@gmail.com",
      password: "ahmad",
      address:
        "101-B Punjab Society",
      coinsData: [
        {
          coinID: 1,
          coinName: 'ADA',
          coinQuantity : 80,
          coinRate: '10$'
        },{
          coinID: 2,
          coinName: 'BTC',
          coinQuantity : 20,
          coinRate: '30K$'
        },{
          coinID: 3,
          coinName: 'SAFEMOON',
          coinQuantity : 150,
          coinRate: '5$'
        }
      ]

      
    },
    {
      name: "Ali",
      email: "ali@gmail.com",
      password: "ali",
      address:
        "111-B Punjab Society",
      coinsData: [
        {
          coinID: 1,
          coinName: 'ADA',
          coinQuantity : 28,
          coinRate: '10$'
        },{
          coinID: 2,
          coinName: 'BTC',
          coinQuantity : 6,
          coinRate: '30K$'
        },{
          coinID: 3,
          coinName: 'SAFEMOON',
          coinQuantity : 10,
          coinRate: '5$'
        }
      ]
    },
    {
      name: "Waqas",
      email: "waqas@gmail.com",
      password: "waqas",
      address:
        "121-B Punjab Society",
      coinsData: [
        {
          coinID: 1,
          coinName: 'ADA',
          coinQuantity : 18,
          coinRate: '10$'
        },{
          coinID: 2,
          coinName: 'BTC',
          coinQuantity : 20,
          coinRate: '30K$'
        },{
          coinID: 3,
          coinName: 'SAFEMOON',
          coinQuantity : 15,
          coinRate: '5$'
        }
     ] },
    ],
    // users: [],
    loggedInUser: null,
    selectedCoin: null,
};
  
const usersReducer = (state = initialState, action) => {
    // console.log(state);
    switch (action.type) {
        case 'TRANSFER_COINS':

            // console.log(action.payload?.transfer_details)
            const { sender, receiver, coinID, coinQuantity } = action.payload?.transfer_details;
        
            const updatedUsers = state.users.map((user) => {
                if (user.email === state.loggedInUser.email) {
                  const updatedCoinsData = user.coinsData.map((coinData) => {
                    if (coinData.coinID === coinID) {
                      return {
                        ...coinData,
                        coinQuantity: coinData.coinQuantity - coinQuantity,
                      };
                    }
                    return coinData;
                  });
        
                  return {
                    ...user,
                    coinsData: updatedCoinsData,
                  };
                } else if (user.email === receiver) {
                  const updatedCoinsData = user.coinsData.map((coinData) => {
                    if (coinData.coinID === coinID) {
                      return {
                        ...coinData,
                        coinQuantity: coinData.coinQuantity + coinQuantity,
                      };
                    }
                    return coinData;
                  });
        
                  return {
                    ...user,
                    coinsData: updatedCoinsData,
                  };
                }
                return user;
              });
        

            const updatedLoggedInUser = {
                ...state.loggedInUser,
                coinsData: state.loggedInUser.coinsData.map((coinData) => {
                  if (coinData.coinID === coinID) {
                    return {
                      ...coinData,
                      coinQuantity: coinData.coinQuantity - coinQuantity,
                    };
                  }
                  return coinData;
                }),
            };

            let newUsersState = {
                ...state,
                users: updatedUsers,
                loggedInUser: updatedLoggedInUser
            };
            console.log('Updated Users State:', newUsersState);
            return newUsersState;

        case 'ADD_USER':

            return {
                ...state,
                users: [...state.users, action.payload?.user],
            };

        case 'SET_LOGIN':

            let setLoginUserState = {
                ...state,
                loggedInUser: action.payload?.user,
            };
            console.log('OnLogin State:', setLoginUserState);
            return setLoginUserState;
        
        case 'SET_SELECTED_COIN':

            let newCoinState = {
                ...state,
                selectedCoin: action.payload,
            };
            console.log('Updated Coin State:', newCoinState);
            
            return newCoinState;

        default:
            return state;
    }
};
  
export default usersReducer;
  