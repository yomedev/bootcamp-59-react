import productsJson from "../../data/products.json";
import { combineReducers } from "redux";
import {
  ADD_PRODUCT,
  CHANGE_SEARCH,
  DELETE_PRODUCT,
  TOGGLE_MODAL,
} from "./productsTypes";

const initialState = {
  data: productsJson,
  isModalOpen: false,
  search: "",
};

const productsDataReducer = (state = initialState.data, action) => {
  switch (action.type) {
    case DELETE_PRODUCT:
      return state.filter(({ id }) => id !== action.payload);
    case ADD_PRODUCT:
      return [action.payload, ...state];
    default:
      return state;
  }
};

const productsIsModalOpenReducer = (
  state = initialState.isModalOpen,
  action
) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return !state;
    default:
      return state;
  }
};

const productsSearchReducer = (state = initialState.search, action) => {
  switch (action.type) {
    case CHANGE_SEARCH:
      return action.payload;
    default:
      return state;
  }
};

export const productsReducer = combineReducers({
  data: productsDataReducer,
  isModalOpen: productsIsModalOpenReducer,
  search: productsSearchReducer,
});
