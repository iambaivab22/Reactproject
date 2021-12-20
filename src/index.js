import React from "react";
import ReactDOM from "react-dom";

import Apps from "./components/Apps";
import "react-alice-carousel/lib/alice-carousel.css";
import CryptoContext from "./components/CryptoContext";

ReactDOM.render(
  <React.StrictMode>
    <CryptoContext>
      <Apps />
    </CryptoContext>
  </React.StrictMode>,
  document.getElementById("root")
);
