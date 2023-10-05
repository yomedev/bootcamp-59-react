const cache = {};

const expensiveCalculations = (a, b) => {
  const key = JSON.stringify({ a, b });
  if (cache[key]) {
    console.log("From cache: ", cache[key]);
    return cache[key];
  }
  const result = a + b;
  cache[key] = result;
  console.log("Calculated: ", result);
  return result;
};

export const Memo = () => {
  return (
    <div className="d-flex flex-row gap-4 mb-4">
      <button
        className="btn btn-primary"
        onClick={() => expensiveCalculations(2, 2)}
      >
        2 + 2
      </button>
      <button
        className="btn btn-danger"
        onClick={() => expensiveCalculations(2, 3)}
      >
        2 + 3
      </button>
      <button
        className="btn btn-success"
        onClick={() => expensiveCalculations(2, 4)}
      >
        2 + 4
      </button>
    </div>
  );
};
