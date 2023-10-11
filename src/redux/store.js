import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { counterReducer } from "./counter/counterReducer";
import { productsReducer } from "./products/productsReducer";

const reducer = combineReducers({
  quantity: counterReducer,
  products: productsReducer,
});

export const store = createStore(reducer, composeWithDevTools());
