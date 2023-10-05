import { useCallback, useState, memo } from "react";

// props.onClick === nextPros.onClick

const ExpensiveButton = memo(({ label, onClick }) => {
  console.log("Button");

  return (
    <button className="btn btn-outline-light" type="button" onClick={onClick}>
      {label}
    </button>
  );
});

ExpensiveButton.displayName = "ExpensiveButton"

// class ExpensiveButton extends PureComponent {
//   // shouldComponentUpdate(nextProps) {
//   //   if (nextProps.label === this.props.label) {
//   //     return false
//   //   }
//   //   return true
//   // }

//   render() {
//     const { label, onClick } = this.props;
//     console.log("Button");

//     return (
//       <button className="btn btn-outline-light" type="button" onClick={onClick}>
//         {label}
//       </button>
//     );
//   }
// }

export const Rerender = () => {
  const [counter, setCounter] = useState(0);

  const handleCount = useCallback(() => {
    setCounter((prev) => prev + 1);
  }, []);

  console.log("Rerender");

  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-5 text-bg-dark rounded-3 mb-5">
      <h2>{counter}</h2>

      <ExpensiveButton label={"Click me!"} onClick={handleCount} />
    </div>
  );
};

// export class Rerender extends Component {
//   state = {
//     counter: 0,
//   };

//   handleCount = () => {
//     this.setState((prevState) => ({ counter: prevState.counter + 1 }));
//   };

//   render() {
//     const { counter } = this.state;
//     console.log("Rerender");

//     return (
//       <div className="d-flex flex-column justify-content-center align-items-center p-5 text-bg-dark rounded-3 mb-5">
//         <h2>{counter}</h2>

//         <ExpensiveButton label={"Click me!"} onClick={this.handleCount} />
//       </div>
//     );
//   }
// }
