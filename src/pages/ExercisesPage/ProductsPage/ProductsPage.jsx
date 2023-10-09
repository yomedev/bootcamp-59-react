import { InStockFilter } from "../../../components/Products/InStockFilter";
import { SearchInput } from "../../../components/Products/SearchInput";
import { CategoryFilter } from "../../../components/Products/CategoryFilter";
import productsJson from "../../../data/products.json";
import { ProductsList } from "../../../components/Products/ProductsList";
import { Modal } from "../../../components/Modal/Modal";
import { Cart } from "../../../components/Cart/Cart";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { getLocalData } from "../../../helpers/getLocalData";
import { useMemo } from "react";

const PRODUCTS_LOCALSTORAGE_KEY = "products";

export const ProductsPage = () => {
  const [products, setProducts] = useState(() =>
    getLocalData({
      lsKey: PRODUCTS_LOCALSTORAGE_KEY,
      defaultValue: productsJson,
    })
  );
  const [isModalShow, setIsModalShow] = useState(false);
  const [isInStock, setIsInStock] = useState(false);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  const modalProduct = useRef(null);

  useEffect(() => {
    localStorage.setItem(PRODUCTS_LOCALSTORAGE_KEY, JSON.stringify(products));
  }, [products]);

  const handleChangeSearch = (event) => setSearch(event.target.value);

  const handleResetSearch = () => setSearch("");

  const handleChangeCategory = (event) => setCategory(event.target.value);

  const handleChangeInStock = () => setIsInStock((prev) => !prev);

  const handleModalShow = (productId) => {
    setIsModalShow(true);
    modalProduct.current = products.find(({ id }) => id === productId);
  };

  const handleModalClose = () => setIsModalShow(false);

  const handleDeleteProduct = (productId) =>
    setProducts((prev) => prev.filter(({ id }) => id !== productId));

  const handleAddProduct = () => {
    const randomIndex = Math.floor(Math.random() * productsJson.length);
    setProducts((prev) => [
      { ...productsJson[randomIndex], id: Date.now() },
      ...prev,
    ]);
  };

  const filteredProducts = useMemo(() => {
    console.log("applyFilters");
    let filteredProducts = [...products];
    filteredProducts = filteredProducts.filter(({ title }) =>
      title.toLowerCase().includes(search.toLowerCase().trim())
    );
    return filteredProducts;
  }, [products, search]);

  return (
    <>
      <div className="d-flex align-items-center mb-5">
        <InStockFilter
          isChecked={isInStock}
          onChangeInStock={handleChangeInStock}
        />
        <CategoryFilter
          category={category}
          onChangeCategory={handleChangeCategory}
        />
        <button
          type="button"
          className="btn btn-primary btn-lg ms-auto"
          onClick={handleAddProduct}
        >
          <FiPlus />
        </button>
      </div>

      <SearchInput
        search={search}
        onChangeSearch={handleChangeSearch}
        onResetSearch={handleResetSearch}
      />
      <ProductsList
        products={filteredProducts}
        onDeleteProduct={handleDeleteProduct}
        onModalShow={handleModalShow}
      />
      {isModalShow && (
        <Modal onModalClose={handleModalClose}>
          <Cart {...modalProduct.current} defaultCounter={1} />
        </Modal>
      )}
    </>
  );
};
