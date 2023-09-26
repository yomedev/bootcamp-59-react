import Link from "./components/Link/Link";
import ProductCard from "./components/ProductCard/ProductCard";
import productsJson from "./data/products.json";

console.log(productsJson);


const App = () => {
  return (
    <>
      <Link />
      <br />
      <Link href="/about" alt="about" label="About" />
      <ul>
        {productsJson.map((product) => {
          return (
            <li key={product.id}>
              <ProductCard {...product} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default App;
