import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { counterReducer } from "./counter/counterReducer";
import { productsReducer } from "./products/productsReducer";
import { getArticlesService } from "../services/articlesServices";
import thunk from "redux-thunk";

const reducer = combineReducers({
  quantity: counterReducer,
  products: productsReducer,
});

// const middleware = (store) => (next) => (action) => {
//   if (typeof action === "function") {
//     action(store.dispatch);
//   }
//   return next(action);
// };

export const articlesThunk = () => async (dispatch) => {
  dispatch({ type: "loading" });
  try {
    const data = await getArticlesService();
    dispatch({ type: "success", payload: data });
  } catch (error) {
    dispatch({ type: "error" });
  }
};

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
