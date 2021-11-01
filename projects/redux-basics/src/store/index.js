import { createStore } from "redux";

// 2 el reducer es una funcion que recibe un estado y una accion
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1 };
  }

  if (action.type === "decrement") {
    return { counter: state.counter - 1 };
  }

  return state;
};

// 1 se debe crear un store, debe recibir como parametro una funcion reducer
const store = createStore(counterReducer);

export default store;
