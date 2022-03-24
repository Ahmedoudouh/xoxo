import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { ModalState } from "./context/modalContext";

ReactDOM.render(
  <React.StrictMode>
    <ModalState>
        <App />
    </ModalState>
  </React.StrictMode>,
  document.getElementById("root")
);