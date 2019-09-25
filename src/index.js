import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./App";
import RootReducer from "./reducers/RootReducer.js";

import "bulma/css/bulma.css";
import "./styles.scss";

const rootElement = document.getElementById("root");

const store = createStore(RootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
