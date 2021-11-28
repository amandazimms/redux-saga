import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import entriesReducer from "../Reducers/Entries.Reducers";
import modalsReducer from "../Reducers/Modals.Reducers";
import createSagaMiddleware from "@redux-saga/core";
import { testSaga } from "../Sagas/testSaga";
import { initSagas } from "../Sagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const configureStore = () => {
  const store = createStore(
    combineReducers({
      entries: entriesReducer,
      modals: modalsReducer,
    }),
    composeWithDevTools(
      applyMiddleware(...middlewares))
  );  
  initSagas(sagaMiddleware);
  return store;
};
export default configureStore;