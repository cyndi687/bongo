import React from "react";
import "./App.css";
import Router from "./Router"

import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import combineReducers from "./redux/reducers";

const store = createStore(combineReducers, {}, applyMiddleware(ReduxThunk));

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
