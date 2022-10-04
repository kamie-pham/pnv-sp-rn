import { composeWithDevTools } from 'remote-redux-devtools';
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import { createStore, applyMiddleware, compose, Reducer, StoreEnhancer } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createRootReducer from './reducer';
import rootSaga from './sagas';

const initialState = {};
const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
    whitelist: ["user"],
    blacklist: [],
}

const persistedReducer = persistReducer(persistConfig, createRootReducer() as Reducer);

const store = createStore(
    persistedReducer,
    initialState as any,
    composeWithDevTools(applyMiddleware(sagaMiddleware),
));

let persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export default {
  store,
  persistor
};