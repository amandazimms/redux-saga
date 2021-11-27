import { combineReducers, createStore } from "redux";
import entriesReducer from "../Reducers/Entries.Reducers";

const configureStore = () => {
  return createStore(
    combineReducers({
      entries: entriesReducer,
    })
  );  
};
export default configureStore;