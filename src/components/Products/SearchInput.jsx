import { useDispatch, useSelector } from "react-redux";
import { changeSearchAction } from "../../redux/products/productsActions";

export const SearchInput = () => {
  const search = useSelector((state) => state.products.search);
  const dispatch = useDispatch();
  return (
    <div className="input-group input-group-lg mb-5">
      <input
        onChange={(event) => dispatch(changeSearchAction(event.target.value))}
        value={search}
        type="text"
        className="form-control"
        placeholder="Type to search ..."
      />
      <button
        onClick={() => dispatch(changeSearchAction(""))}
        className="btn btn-outline-secondary"
        type="button"
      >
        Reset
      </button>
    </div>
  );
};
