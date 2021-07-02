import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "../src/components/App";
import store from "../src/app/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
