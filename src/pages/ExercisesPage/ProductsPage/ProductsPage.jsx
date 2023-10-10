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

  const handleModalShow = (product) => {
    setIsModalShow(true);
    modalProduct.current = product;
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
          checked={isInStock}
          onChange={handleChangeInStock}
        />
        <CategoryFilter
          category={category}
          onChange={handleChangeCategory}
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
        value={search}
        onChange={handleChangeSearch}
        onReset={handleResetSearch}
      />
      <ProductsList
        products={filteredProducts}
        onRemoveProduct={handleDeleteProduct}
        onModalOpen={handleModalShow}
      />
      {isModalShow && (
        <Modal onModalClose={handleModalClose}>
          <Cart {...modalProduct.current} defaultCounter={1} />
        </Modal>
      )}
    </>
  );
};
