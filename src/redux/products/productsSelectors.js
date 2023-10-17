import { createSelector } from "@reduxjs/toolkit";

export const selectProductsData = (state) => state.products.data;
export const selectProductsSearch = (state) => state.products.search;

export const selectFilteredProducts = createSelector(
  [selectProductsData, selectProductsSearch],
  (products, search) => {
    console.log("selectFilteredProducts");

    return products.filter(({ title }) =>
      title.toLowerCase().includes(search.toLowerCase().trim())
    );
  }
);

export const selectTotalWithDiscount = createSelector(
  selectFilteredProducts,
  (filteredProducts) => {
    console.log("selectTotalWithDiscount");
    return filteredProducts.reduce(
      (acc, { discountPercentage }) => (discountPercentage > 0 ? acc + 1 : acc),
      0
    );
  }
);
