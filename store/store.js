import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import newsReducer from "./reducer";

const rootReducer = combineReducers({
  newsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
