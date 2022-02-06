import { createStore, Store, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import createSagaMiddleware from '@redux-saga/core';

import rootReducer from './ducks/rootReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

const store: Store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware),
);

const persistor = persistStore(store);

export type State = ReturnType<typeof rootReducer>;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export { store, persistor };
