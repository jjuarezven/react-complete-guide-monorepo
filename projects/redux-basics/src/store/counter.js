import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };
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
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      // internally, redux toolkit translates this to code to produce a new state, so we are not mutating state
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

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
