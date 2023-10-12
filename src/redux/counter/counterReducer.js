import { createReducer, createAction } from "@reduxjs/toolkit";

// export const counterReducer = (state = 10, action) => {
//   switch (action.type) {
//     case INCREASE:
//       return state + 1;
//     case DECREASE:
//       return state - 1;
//     case QUANTITY:
//       return action.payload;
//     default:
//       return state;
//   }
// };

export const increaseAction = createAction("increase")
export const decreaseAction = createAction("decrease")
export const quantityAction = createAction("quantity")

export const counterReducer = createReducer(10, (builder) => {
  builder
    .addCase(increaseAction, (state) => state + 1)
    .addCase(decreaseAction, (state) => state - 1)
    .addCase(quantityAction, (state, action) => action.payload);
});


// {
//   [INCREASE]: (state) => state + 1,
//   [DECREASE]: (state) => state - 1,
//   [QUANTITY]: (state, action) => action.payload,
// }
