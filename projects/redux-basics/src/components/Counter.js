import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import reducerActions from "./common/constants.js";

const Counter = () => {
  const toggleCounterHandler = () => {
    dispatch({ type: reducerActions.toggle });
  };

  // 4 useSelector permite acceder a valores dentro del state definido en el store
  const counter = useSelector((state) => {
    return state.counter;
  });

  const showCounter = useSelector((state) => {
    return state.showCounter;
  });

  // 5 para despachar acciones a nuestro store, usamos el hook useDispatch, la funcion dispatch debe recibir alguna
  // de las acciones configuradas en el reducer
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: reducerActions.increment });
  };

  const decrementHandler = () => {
    dispatch({ type: reducerActions.decrement });
  };

  const increaseHandler = () => {
    dispatch({ type: reducerActions.increase, amount: 5 });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
