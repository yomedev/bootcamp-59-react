import { FaMinus, FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { DECREASE, INCREASE, QUANTITY } from "../../redux/counter/counterTypes";

export const Cart = ({ thumbnail, title, brand, price }) => {
  const quantity = useSelector((state) => state.quantity);

  const dispatch = useDispatch();

  const handleUpdate = (event) => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case "plus":
        dispatch({ type: INCREASE });
        break;
      case "minus":
        dispatch({ type: DECREASE });
        break;
      case "quantity":
        dispatch({ type: QUANTITY, payload: Number(value) })
        break;
      default:
    }
  };

  const getTotalPrice = () => {
    return quantity * price;
  };

  const totalPrice = getTotalPrice();

  return (
    <section className="h-100 p-4 h-custom" style={{ backgroundColor: "#eee" }}>
      <h3 className="mb-4 pt-2 text-center fw-bold text-uppercase">
        Shoping cart
      </h3>

      <div className="d-flex align-items-center mb-4 shadow-lg p-2 rounded">
        <img
          src={thumbnail}
          className="img-fluid"
          style={{ width: "150px" }}
          alt="Generic placeholder"
        />

        <div className="ms-3">
          <h5 className="text-primary">{title}</h5>
          <h6 style={{ color: "#9e9e9e" }}>{brand}</h6>
          <p className="fw-bold mb-0 me-5 pe-3">{price}$</p>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center mb-4 gap-4">
        <button
          name="minus"
          onClick={handleUpdate}
          className="btn btn-outline-primary p-2 d-flex justify-content-center align-items-center"
        >
          <FaMinus fontSize={25} />
        </button>

        <div style={{ width: 70 }}>
          <input
            onChange={handleUpdate}
            style={{ fontSize: 20 }}
            id="number"
            min="1"
            name="quantity"
            value={quantity.toString()}
            type="number"
            class="form-control"
          />
        </div>

        <button
          name="plus"
          onClick={handleUpdate}
          className="btn btn-outline-primary p-2 d-flex justify-content-center align-items-center"
        >
          <FaPlus fontSize={25} />
        </button>
      </div>
      <div
        className="d-flex justify-content-between p-2 mb-4"
        style={{ backgroundColor: "#e1f5fe" }}
      >
        <h5 className="fw-bold mb-0">Total:</h5>
        <h5 className="fw-bold mb-0">{totalPrice}$</h5>
      </div>
      <div className="w-full d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-primary mx-auto btn-block btn-lg"
        >
          Buy now
        </button>
      </div>
    </section>
  );
};
