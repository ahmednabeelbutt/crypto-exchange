import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './reducers/users-reducer';

const store = configureStore({
  reducer: {
    usersReducer: usersReducer,
  }
});

export default store;