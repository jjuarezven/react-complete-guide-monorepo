import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

// 1 se debe crear un store, debe recibir como parametro al menos una funcion reducer
//const store = createStore(counterReducer);
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer }
});

export default store;
