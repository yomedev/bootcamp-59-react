import defaultImage from "../../images/default_image.png";
import PropTypes from "prop-types";
import styles from "./ProductCard.module.css";
// import { Stock } from "./ProductCard.styled";
import { BiAlarmAdd } from "react-icons/bi";

const ProductCard = ({
  title,
  thumbnail,
  price,
  discountPercentage,
  stock,
}) => {
  const priceWithoutDiscount = Math.round(
    price + (price * discountPercentage) / 100
  );
  return (
    <div>
      <BiAlarmAdd />
      <a className={styles.link} href={`/${title}`}>
        {title}
      </a>
      <img src={thumbnail || defaultImage} alt={title} />
      <p >{price}</p>
      <p>{priceWithoutDiscount}</p>
      {discountPercentage > 0 && <p>{discountPercentage}</p>}
      <p className={`${styles.stock} ${stock ? styles.inStock : styles.outOfStock}`}>
        {stock ? "In stock" : "Out of stock"}
      </p>
      {/* <Stock stock={stock} >{stock ? "In stock" : "Out of stock"}</Stock> */}
    </div>
  );
};


ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discountPercentage: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
};

export default ProductCard;
