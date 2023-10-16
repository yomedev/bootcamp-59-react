import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter/counterReducer";
import { productsReducer } from "./products/productsSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { articlesReducer } from "./articles/articlesSlice";

const config = {
  key: "products",
  storage,
  whitelist: ["data"],
};

const persistedProductsReducer = persistReducer(config, productsReducer);

// const customMiddleware = (store) => (next) => (action) => {
//   return next(action);
// };

export const store = configureStore({
  reducer: {
    quantity: counterReducer,
    products: persistedProductsReducer,
    articles: articlesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistore = persistStore(store);
