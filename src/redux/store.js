import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { createAction } from '@reduxjs/toolkit';

import { itemsSlice } from '../redux/itemsSlice';
import { filterSlice } from './filterSlice';

const persistConfig = {
  key: 'root',
  storage,
};

export const addItems = createAction('items/addItems');
export const deleteItems = createAction('items/deleteItems');
export const updateFilter = createAction('filter/updateFilter');

const persistedItemsReducer = persistReducer(persistConfig, itemsSlice.reducer);

export const store = configureStore({
  reducer: {
    items: persistedItemsReducer,

    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
