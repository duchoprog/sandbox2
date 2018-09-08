import React from "react";
import ReactDOM from "react-dom";
import Saludo from "./saludo.js";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Saludo nombre="Carlos" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
