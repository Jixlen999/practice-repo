import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { worker } from "./server";

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === "development") {
  worker.start();
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
