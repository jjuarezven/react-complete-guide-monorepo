import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";

// 3 se debe registrar el store para que sea accesible a los componentes que se desea hagan uso de el, para ello se debe
// hacer un wrap del Provider sobre componente root App y pasarle como prop el store que definimos previamente

import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
