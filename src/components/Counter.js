import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/index";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
    // dispatch({ type: "toggleCounter" });
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
    // dispatch({ type: "increment" });
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
    // dispatch({ type: "decrement" });
  };

  const increaseHandlerByValue = () => {
    dispatch(counterActions.increase(5));
    // dispatch({ type: "increase", value: 5 });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter === true && (
        <div className={classes.value}>-- {counter} --</div>
      )}
      <div>
        <button onClick={incrementHandler}>increase</button>
        <button onClick={increaseHandlerByValue}>increase by 5</button>
        <button onClick={decrementHandler}>decrease</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
