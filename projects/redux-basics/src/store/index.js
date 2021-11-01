import { createStore } from "redux";
import reducerActions from "../components/common/constants.js";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };
// 2 el reducer es una funcion que recibe un estado y una accion
/* const counterReducer = (state = initialState, action) => {
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
}; */

// 6 using redux toolkit
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      // internally, redux toolkit translates this to code to produce a new state, so no side effects are triggered
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      // payload is mandatory to pass data using redux toolkit
      state.counter += action.payload.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});

// 1 se debe crear un store, debe recibir como parametro una funcion reducer
//const store = createStore(counterReducer);
const store = configureStore({ reducer: counterSlice.reducer });

export const counterActions = counterSlice.actions;
export default store;
