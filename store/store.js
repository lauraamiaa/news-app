import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import newsReducer from "./reducer";

const rootReducer = combineReducers({
  newsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const rootReducer = combineReducers({
//   newsReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(persistedReducer, applyMiddleware(thunk));
// const persistor = persistStore(store);
// export default { store, persistor };
