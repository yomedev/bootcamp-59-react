import { INCREASE, DECREASE, QUANTITY } from "./counterTypes";


export const counterReducer = (state = 10, action) => {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    case QUANTITY:
      return action.payload;
    default:
      return state;
  }
};