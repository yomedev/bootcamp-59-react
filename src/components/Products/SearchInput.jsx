export const SearchInput = ({ value, onChange, onReset }) => {
  return (
    <div className="input-group input-group-lg mb-5">
      <input
        onChange={onChange}
        value={value}
        type="text"
        className="form-control"
        placeholder="Type to search ..."
      />
      <button
        onClick={onReset}
        className="btn btn-outline-secondary"
        type="button"
      >
        Reset
      </button>
    </div>
  );
};
