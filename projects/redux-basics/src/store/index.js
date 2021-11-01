import { createStore } from "redux";
import reducerActions from "../components/common/constants.js";

// 2 el reducer es una funcion que recibe un estado y una accion
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === reducerActions.increment) {
    return { counter: state.counter + 1 };
  }

  if (action.type === reducerActions.decrement) {
    return { counter: state.counter - 1 };
  }

  if (action.type === reducerActions.increase) {
    return { counter: state.counter + action.amount };
  }

  return state;
};

// 1 se debe crear un store, debe recibir como parametro una funcion reducer
const store = createStore(counterReducer);

export default store;
