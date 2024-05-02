import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decreCount, increCount, resetCount } from "../Actions/CounterAction";

const Counter = () => {
  const { count, msg } = useSelector((state) => {
    // console.log(state);
    return state;
  });

  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h1>Count: {count}</h1>
      </div>
      <hr />
      <button onClick={() => dispatch(increCount())}>+1</button>
      <br />
      <button onClick={() => dispatch(decreCount())}>-1</button>
      <br />
      <button onClick={() => dispatch(resetCount())}>Reset</button>
      {msg && <h3>{msg}</h3>}
    </>
  );
};

export default Counter;
