import { FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Cart } from "../../../components/Cart/Cart";
import { Modal } from "../../../components/Modal/Modal";
import { ProductsList } from "../../../components/Products/ProductsList";
import { SearchInput } from "../../../components/Products/SearchInput";
import productsJson from "../../../data/products.json";
import { addProduct } from "../../../redux/products/productsSlice";


export const ProductsPage = () => {
  const isModalOpen = useSelector((state) => state.products.isModalOpen);

  const dispatch = useDispatch();

  const handleAddProduct = () => {
    const randomIndex = Math.floor(Math.random() * productsJson.length);
    const newProduct = { ...productsJson[randomIndex] };
    dispatch(addProduct(newProduct));
  };

  return (
    <>
      <div className="d-flex align-items-center mb-5">
        <button
          type="button"
          className="btn btn-primary btn-lg ms-auto"
          onClick={handleAddProduct}
        >
          <FiPlus />
        </button>
      </div>

      <SearchInput />
      <ProductsList />
      {isModalOpen && (
        <Modal>
          <Cart/>
        </Modal>
      )}
    </>
  );
};
