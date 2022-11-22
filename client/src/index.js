import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const NODE_MOUNT = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  NODE_MOUNT
);
