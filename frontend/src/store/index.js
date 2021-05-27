import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import sessionReducer from './session';
import photoReducer from './photos';
import commentReducer from './comment';
import usersReducer from './users';
import tagReducer from './tag';
import thunk from "redux-thunk";
import albumReducer from './album';

const rootReducer = combineReducers({
  session:sessionReducer,
  photo:photoReducer,
  comment:commentReducer,
  users:usersReducer,
  tags:tagReducer,
  albums:albumReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
