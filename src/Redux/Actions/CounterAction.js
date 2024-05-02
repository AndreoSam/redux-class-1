import { COUNTER } from "./ActionConst";

export const increCount = () => {
  return {
    type: COUNTER.INCREMENT,
    payload: { msg: "Increment Done" },
  };
};

export const decreCount = () => {
  return {
    type: COUNTER.DECREMENT,
    payload: { msg: "Decrement Done" },
  };
};

export const resetCount = () => {
  return {
    type: COUNTER.RESET,
    payload: { msg: "Reset Done" },
  };
};
