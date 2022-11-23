import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const NODE_MOUNT = document.getElementById("root");
const root = createRoot(NODE_MOUNT);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
