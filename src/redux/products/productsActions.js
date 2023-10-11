import {
  ADD_PRODUCT,
  CHANGE_SEARCH,
  DELETE_PRODUCT,
  TOGGLE_MODAL,
} from "./productsTypes";

export const addProductAction = (newProduct) => ({
  type: ADD_PRODUCT,
  payload: newProduct,
});
export const deleteProductAction = (productId) => ({
  type: DELETE_PRODUCT,
  payload: productId,
});
export const toggleModalAction = () => ({ type: TOGGLE_MODAL });
export const changeSearchAction = (value) => ({
  type: CHANGE_SEARCH,
  payload: value,
});
