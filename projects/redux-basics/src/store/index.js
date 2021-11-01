import { createStore } from "redux";
import reducerActions from "../components/common/constants.js";

const initialState = { counter: 0, showCounter: true };
// 2 el reducer es una funcion que recibe un estado y una accion
const counterReducer = (state = initialState, action) => {
  if (action.type === reducerActions.increment) {
    return { ...state, counter: state.counter + 1 };
  }

  if (action.type === reducerActions.decrement) {
    return { ...state, counter: state.counter - 1 };
  }

  if (action.type === reducerActions.increase) {
    return { ...state, counter: state.counter + action.amount };
  }

  if (action.type === reducerActions.toggle) {
    return { ...state, showCounter: !state.showCounter };
  }

  return state;
};

// 1 se debe crear un store, debe recibir como parametro una funcion reducer
const store = createStore(counterReducer);

export default store;
