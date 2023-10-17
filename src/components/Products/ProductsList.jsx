import { useSelector } from "react-redux";
import { NotFoundProducts } from "./NotFoundProducts";
import { ProductItem } from "./ProductItem";
import { useState } from "react";
import {
  selectFilteredProducts,
  selectTotalWithDiscount,
} from "../../redux/products/productsSelectors";

export const ProductsList = () => {
  const [counter, setCounter] = useState(0);

  const filteredProducts = useSelector(selectFilteredProducts);

  const totalWithDiscount = useSelector(selectTotalWithDiscount);

  if (!filteredProducts?.length) {
    return <NotFoundProducts />;
  }

  return (
    <section className="h-100 h-custom">
      <button
        className="btn btn-primary"
        onClick={() => setCounter((prev) => prev + 1)}
      >
        {counter}
      </button>
      <p>Total with discount: {totalWithDiscount}</p>
      {filteredProducts.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </section>
  );
};
