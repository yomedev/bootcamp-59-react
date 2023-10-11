import { useSelector } from "react-redux";
import { NotFoundProducts } from "./NotFoundProducts";
import { ProductItem } from "./ProductItem";
import { useMemo } from "react";

export const ProductsList = ({ onRemoveProduct, onModalOpen }) => {
  const products = useSelector((state) => state.products.data);
  const search = useSelector((state) => state.products.search);

  const filteredProducts = useMemo(() => {
    let filteredProducts = [...products];
    filteredProducts = filteredProducts.filter(({ title }) =>
      title.toLowerCase().includes(search.toLowerCase().trim())
    );
    return filteredProducts;
  }, [products, search]);

  if (!products?.length) {
    return <NotFoundProducts />;
  }

  return (
    <section className="h-100 h-custom">
      {filteredProducts.map((product) => (
        <ProductItem
          key={product.id}
          {...product}
        />
      ))}
    </section>
  );
};
