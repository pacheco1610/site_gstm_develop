import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedUser =  persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    user: persistedUser,
  }
})