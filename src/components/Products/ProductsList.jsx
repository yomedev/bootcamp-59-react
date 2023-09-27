import { Component } from "react";
import productsJson from "../../data/products.json";
import { ProductItem } from "./ProductItem";

export class ProductsList extends Component {
  state = {
    products: productsJson,
  };

  handleRemoveProduct = (productId) => {
    this.setState((prevState) => ({
      products: prevState.products.filter((product) => product.id !== productId),
    }));
  };

  render() {
    const { onModalOpen } = this.props;
    const { products } = this.state;
    return (
      <section className="h-100 h-custom">
        {products.map((product, index) => (
          <ProductItem
            onRemoveProduct={this.handleRemoveProduct}
            onModalOpen={onModalOpen}
            key={product.id}
            {...product}
          />
        ))}
      </section>
    );
  }
}

// export const ProductsList = ({ onModalOpen}) => {
//   return (
//     <section className="h-100 h-custom">
//       {productsJson.map((product) => (
//         <ProductItem onModalOpen={onModalOpen} key={product.id} {...product} />
//       ))}
//     </section>
//   );
// };
