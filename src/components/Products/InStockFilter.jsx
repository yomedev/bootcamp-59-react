export const InStockFilter = ({ onChange, checked }) => {
  return (
    <fieldset className="me-5">
      <legend>Availability:</legend>

      <div className="form-check">
        <label className="form-check-label">
          <span>In stock</span>
          <input
            checked={checked}
            onChange={onChange}
            className="form-check-input"
            type="checkbox"
          />
        </label>
      </div>
    </fieldset>
  );
};
