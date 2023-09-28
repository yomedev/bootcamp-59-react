const categories = [
  { label: "All", value: "all" },
  { label: "Smartphones", value: "smartphones" },
  { label: "Laptops", value: "laptops" },
  { label: "Watches", value: "watches" },
];

export const CategoryFilter = ({ onChange, category }) => {
  return (
    <fieldset className="ms-5">
      <legend>Categories:</legend>

      <div className="d-flex">
        {categories.map(({ label, value }) => (
          <div className="form-check me-4">
            <label className="form-check-label">
              <span>{label}</span>
              <input
                checked={value === category}
                onChange={onChange}
                value={value}
                className="form-check-input"
                type="radio"
                name="category"
              />
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};
