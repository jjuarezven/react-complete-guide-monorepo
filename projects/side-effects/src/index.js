import React from "react";
import ReactDOM from "react-dom";
import { AuthContextProvider } from "./store/auth-context";

import "./index.css";
import App from "./App";

// all components (and its childrens) wrapped on AuthContext.Provider now has access to context defined on AuthContext
ReactDOM.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById("root")
);
