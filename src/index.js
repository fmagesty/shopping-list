import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "../src/components/App/App";
import store from "../src/store/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

//test21
