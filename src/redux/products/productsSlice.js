import productsJson from "../../data/products.json";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: productsJson,
  isModalOpen: false,
  search: "",
  cartProduct: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    deleteProduct: (state, { payload }) => {
      state.data = state.data.filter(({ id }) => id !== payload);
    },
    addProduct: {
      prepare: (newProduct) => ({ payload: { ...newProduct, id: Date.now() } }),
      reducer: (state, { payload }) => {
        state.data.unshift(payload);
      },
    },
    toggleModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
    changeSearch: (state, { payload }) => {
      state.search = payload;
    },
    updateCartProduct: (state, { payload }) => {
      state.cartProduct = payload;
    },
  },
});

export const productsReducer = productsSlice.reducer;

export const { deleteProduct, addProduct, toggleModal, changeSearch, updateCartProduct } =
  productsSlice.actions;

// const productsDataReducer = (state = initialState.data, action) => {
//   switch (action.type) {
//     case DELETE_PRODUCT:
//       return state.filter(({ id }) => id !== action.payload);
//     case ADD_PRODUCT:
//       return [action.payload, ...state];
//     default:
//       return state;
//   }
// };

// const productsIsModalOpenReducer = (
//   state = initialState.isModalOpen,
//   action
// ) => {
//   switch (action.type) {
//     case TOGGLE_MODAL:
//       return !state;
//     default:
//       return state;
//   }
// };

// const productsSearchReducer = (state = initialState.search, action) => {
//   switch (action.type) {
//     case CHANGE_SEARCH:
//       return action.payload;
//     default:
//       return state;
//   }
// };

// export const productsReducer = combineReducers({
//   data: productsDataReducer,
//   isModalOpen: productsIsModalOpenReducer,
//   search: productsSearchReducer,
// });
