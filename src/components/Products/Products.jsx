import { InStockFilter } from "./InStockFilter";
import { SearchInput } from "./SearchInput";
import { CategoryFilter } from "./CategoryFilter";
import { useMemo, useReducer, useState } from "react";
import productsJson from "../../data/products.json";
import { ProductsList } from "./ProductsList";
import { Modal } from "../Modal/Modal";
import { Cart } from "../Cart/Cart";
import { FiPlus } from "react-icons/fi";

const ALL_CATEGORY_VALUE = "all";

// const PRODUCTS_LOCAL_STORAGE_KEY = "products";

const reducer = (state, action) => {
  switch (action.type) {
    case "toggle_modal":
      return { ...state, isModalOpen: !state.isModalOpen };
    case "remove_product":
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export const Products = () => {
  const [state, dispatch] = useReducer(reducer, {
    products: productsJson,
    isModalOpen: false,
    isInStock: false,
    category: ALL_CATEGORY_VALUE,
    search: "",
  });
  const { products, isModalOpen, isInStock, category, search } = state;
  // const [products, setProducts] = useState(productsJson);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isInStock, setIsInStock] = useState(false);
  // const [category, setCategory] = useState(ALL_CATEGORY_VALUE);
  // const [search, setSearch] = useState("");

  const handleChangeSearch = (event) => {
    const { value } = event.target;
    // setSearch(value);
  };

  const handleResetSearch = () => {
    // setSearch("");
  };

  const handleChangeCategory = (event) => {
    const { value } = event.target;
    // setCategory(value);
  };

  const handleChangeIsInStock = () => {
    // setIsInStock((prev) => !prev);
  };

  const handleModalToggle = (product) => {
    // setIsModalOpen((prev) => !prev);
    dispatch({ type: "toggle_modal" });
  };

  const handleRemoveProduct = (productId) => {
    dispatch({ type: "remove_product", payload: productId });
    // setProducts((prev) => prev.filter((product) => product.id !== productId));
  };

  const handleAddProduct = () => {
    const randomIndex = Math.floor(Math.random() * productsJson.length);
    const newProduct = { ...productsJson[randomIndex], id: Date.now() };
    // setProducts((prev) => [newProduct, ...prev]);
  };

  const applyFilters = () => {
    console.log("applyFilters");
    let filteredProducts = [...products];
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
  };

  const filteredProducts = useMemo(applyFilters, [
    products,
    search,
    isInStock,
    category,
  ]);
  // const filteredProducts = applyFilters();

  return (
    <>
      <div className="d-flex align-items-center mb-5">
        <InStockFilter onChange={handleChangeIsInStock} checked={isInStock} />
        <CategoryFilter onChange={handleChangeCategory} category={category} />
        <button
          onClick={handleAddProduct}
          type="button"
          className="btn btn-primary btn-lg ms-auto"
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
        onRemoveProduct={handleRemoveProduct}
        onModalOpen={handleModalToggle}
      />

      {isModalOpen && (
        <Modal onModalClose={handleModalToggle}>
          <Cart />
        </Modal>
      )}
    </>
  );
};

// export class Products extends Component {
//   state = {
//     products: productsJson,
//     isModalOpen: false,
//     isInStock: false,
//     category: ALL_CATEGORY_VALUE,
//     search: "",
//   };

//   modalProduct = null;

//   componentDidMount() {
//     const localData = JSON.parse(
//       localStorage.getItem(PRODUCTS_LOCAL_STORAGE_KEY)
//     );
//     if (localData) {
//       this.setState({ products: localData });
//     }
//   }

//   componentDidUpdate(_, prevState) {
//     if (this.state.products !== prevState.products) {
//       localStorage.setItem(
//         PRODUCTS_LOCAL_STORAGE_KEY,
//         JSON.stringify(this.state.products)
//       );
//     }
//   }

//   handleChangeSearch = (event) => {
//     const { value } = event.target;
//     this.setState({ search: value });
//   };

//   handleResetSearch = () => {
//     this.setState({ search: "" });
//   };

//   handleChangeCategory = (event) => {
//     const { value } = event.target;
//     this.setState({ category: value });
//   };

//   handleChangeIsInStock = () => {
//     this.setState((prevState) => ({ isInStock: !prevState.isInStock }));
//   };

//   handleModalToggle = (product) => {
//     this.modalProduct = product
//     this.setState((prevState) => ({ isModalOpen: !prevState.isModalOpen }));
//   };

//   handleRemoveProduct = (productId) => {
//     this.setState((prevState) => ({
//       products: prevState.products.filter(
//         (product) => product.id !== productId
//       ),
//     }));
//   };

//   handleAddProduct = () => {
//     const randomIndex = Math.floor(Math.random() * productsJson.length);
//     this.setState((prevState) => ({
//       products: [
//         { ...productsJson[randomIndex], id: Date.now() },
//         ...prevState.products,
//       ],
//     }));
//   };

//   applyFilters() {
//     let filteredProducts = [...this.state.products];
//     const { search, isInStock, category } = this.state;
//     if (search) {
//       filteredProducts = filteredProducts.filter(({ title }) =>
//         title.toUpperCase().includes(search.toUpperCase().trim())
//       );
//     }
//     if (isInStock) {
//       filteredProducts = filteredProducts.filter(({ stock }) => stock > 0);
//     }
//     if (category !== ALL_CATEGORY_VALUE) {
//       filteredProducts = filteredProducts.filter(
//         (product) => product.category === category
//       );
//     }

//     return filteredProducts;
//   }

//   render() {
//     const { isModalOpen, isInStock, category, search } = this.state;
//     const filteredProducts = this.applyFilters();
//     return (
//       <>
//         <div className="d-flex align-items-center mb-5">
//           <InStockFilter
//             onChange={this.handleChangeIsInStock}
//             checked={isInStock}
//           />
//           <CategoryFilter
//             onChange={this.handleChangeCategory}
//             category={category}
//           />
//           <button
//             onClick={this.handleAddProduct}
//             type="button"
//             className="btn btn-primary btn-lg ms-auto"
//           >
//             <FiPlus />
//           </button>
//         </div>

//         <SearchInput
//           value={search}
//           onChange={this.handleChangeSearch}
//           onReset={this.handleResetSearch}
//         />
//         <ProductsList
//           products={filteredProducts}
//           onRemoveProduct={this.handleRemoveProduct}
//           onModalOpen={this.handleModalToggle}
//         />

//         {isModalOpen && (
//           <Modal onModalClose={this.handleModalToggle}>
//             <Cart {...this.modalProduct} />
//           </Modal>
//         )}
//       </>
//     );
//   }
// }
