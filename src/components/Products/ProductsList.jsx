import { NotFoundProducts } from "./NotFoundProducts";
import { ProductItem } from "./ProductItem";

export const ProductsList = ({ products, onRemoveProduct, onModalOpen }) => {
  if (!products?.length) {
    return <NotFoundProducts />;
  }

  return (
    <section className="h-100 h-custom">
      {products.map((product) => (
        <ProductItem
          onRemoveProduct={onRemoveProduct}
          onModalOpen={onModalOpen}
          key={product.id}
          {...product}
        />
      ))}
    </section>
  );
};
