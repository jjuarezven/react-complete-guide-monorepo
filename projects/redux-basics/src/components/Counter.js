import classes from "./Counter.module.css";
import { useSelector } from "react-redux";

const Counter = () => {
  const toggleCounterHandler = () => {};
  // 4 useSelector permite acceder a valores dentro del state definido en el store
  const counter = useSelector((state) => {
    return state.counter;
  });

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
