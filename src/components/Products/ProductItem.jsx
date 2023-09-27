import clsx from "clsx";
import { FaTrash } from "react-icons/fa6";

export const ProductItem = ({
  id,
  title,
  price,
  stock,
  brand,
  thumbnail,
  onModalOpen,
  onRemoveProduct,
}) => {
  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-row align-items-center">
            <div>
              <img
                src={thumbnail}
                className="img-fluid rounded-3"
                alt="Shopping item"
                style={{ width: "150px", height: "100px", aspectRatio: "auto" }}
              />
            </div>
            <div className="ms-3">
              <h5>{title}</h5>
              <p className="small mb-0">{brand}</p>
            </div>
          </div>
          <div className="d-flex flex-row align-items-center">
            <div style={{ width: "100px", textAlign: "center" }}>
              <h5
                style={{ fontSize: 14 }}
                className={clsx("fw-normal mb-0 me-4", {
                  "text-success": stock > 5,
                  "text-warning": stock < 5 && stock > 0,
                  "text-danger": stock === 0,
                })}
              >
                {stock === 0
                  ? "Out of stock"
                  : stock < 5
                  ? "Few left"
                  : "In stock"}
              </h5>
            </div>
            <div style={{ width: "80px" }}>
              <h5 className="mb-0">${price}</h5>
            </div>
            <button
              onClick={onModalOpen}
              type="button"
              className="btn btn-primary btn-lg me-4"
            >
              Add to cart
            </button>
            <button
              onClick={() => onRemoveProduct(id)}
              type="button"
              style={{ backgroundColor: "transparent", border: "none" }}
            >
              <FaTrash color="red" size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
