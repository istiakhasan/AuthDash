// store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './authSlice';
import dataSlice from './dataSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'user'], 
};

const dataPersistConfig = {
  key: 'data',
  storage,
  whitelist: ['someDataField'], 
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedDataReducer = persistReducer(dataPersistConfig, dataSlice);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    data: persistedDataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});


export const persistor = persistStore(store);
