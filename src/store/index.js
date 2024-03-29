import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";

import reducer from "../reducers";
import api from "./middlewares/api";

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const store = createStore(reducer,
  composeEnhancers(
    applyMiddleware(
      thunk, api
    )
  )
);

export default store;