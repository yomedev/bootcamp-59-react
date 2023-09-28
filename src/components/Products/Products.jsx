import { InStockFilter } from "./InStockFilter";
import { SearchInput } from "./SearchInput";
import { CategoryFilter } from "./CategoryFilter";
import { Component } from "react";
import productsJson from "../../data/products.json";
import { ProductsList } from "./ProductsList";
import { Modal } from "../Modal/Modal";
import { Cart } from "../Cart/Cart";
import { FiPlus } from "react-icons/fi";

const ALL_CATEGORY_VALUE = "all";

export class Products extends Component {
  state = {
    products: productsJson,
    isModalOpen: false,
    isInStock: false,
    category: ALL_CATEGORY_VALUE,
    search: "",
  };

  handleChangeSearch = (event) => {
    const { value } = event.target;
    this.setState({ search: value });
  };

  handleResetSearch = () => {
    this.setState({ search: "" });
  };

  handleChangeCategory = (event) => {
    const { value } = event.target;
    this.setState({ category: value });
  };

  handleChangeIsInStock = () => {
    this.setState((prevState) => ({ isInStock: !prevState.isInStock }));
  };

  handleModalToggle = () => {
    this.setState((prevState) => ({ isModalOpen: !prevState.isModalOpen }));
  };

  handleRemoveProduct = (productId) => {
    this.setState((prevState) => ({
      products: prevState.products.filter(
        (product) => product.id !== productId
      ),
    }));
  };

  handleAddProduct = () => {
    const randomIndex = Math.floor(Math.random() * productsJson.length);
    this.setState((prevState) => ({
      products: [
        { ...productsJson[randomIndex], id: Date.now() },
        ...prevState.products,
      ],
    }));
  };

  applyFilters() {
    let filteredProducts = [...this.state.products];
    const { search, isInStock, category } = this.state;
    if (search) {
      filteredProducts = filteredProducts.filter(({ title }) =>
        title.toUpperCase().includes(search.toUpperCase().trim())
      );
    }
    if (isInStock) {
      filteredProducts = filteredProducts.filter(({ stock }) => stock > 0);
    }
    if (category !== ALL_CATEGORY_VALUE) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === category
      );
    }

    return filteredProducts;
  }

  render() {
    const { isModalOpen, isInStock, category, search } = this.state;
    const filteredProducts = this.applyFilters();
    return (
      <>
        <div className="d-flex align-items-center mb-5">
          <InStockFilter
            onChange={this.handleChangeIsInStock}
            checked={isInStock}
          />
          <CategoryFilter
            onChange={this.handleChangeCategory}
            category={category}
          />
          <button
            onClick={this.handleAddProduct}
            type="button"
            className="btn btn-primary btn-lg ms-auto"
          >
            <FiPlus />
          </button>
        </div>

        <SearchInput
          value={search}
          onChange={this.handleChangeSearch}
          onReset={this.handleResetSearch}
        />
        <ProductsList
          products={filteredProducts}
          onRemoveProduct={this.handleRemoveProduct}
          onModalOpen={this.handleModalToggle}
        />

        {isModalOpen && (
          <Modal onModalClose={this.handleModalToggle}>
            <Cart />
          </Modal>
        )}
      </>
    );
  }
}
