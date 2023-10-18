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
import { usersReducer } from "./users/usersSlice";

const config = {
  key: "products",
  storage,
  whitelist: ["data"],
};

const usersConfig = {
  key: "token",
  storage,
  whitelist: ["token"],
};

const persistedProductsReducer = persistReducer(config, productsReducer);

const persistedUsersReducer = persistReducer(usersConfig, usersReducer);

// const customMiddleware = (store) => (next) => (action) => {
//   return next(action);
// };

export const store = configureStore({
  reducer: {
    quantity: counterReducer,
    products: persistedProductsReducer,
    articles: articlesReducer,
    user: persistedUsersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistore = persistStore(store);
