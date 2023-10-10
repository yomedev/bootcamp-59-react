import { useState } from "react";

import { Button } from "../Button";
import { useSearchParams } from "react-router-dom";

export const ArticlesSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("search") ?? "";

  const [search, setSearch] = useState(query);

  const handleChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  const handleSubmit = () => {
    setSearchParams({ search, page: 1 });
  };

  return (
    <div className="input-group mb-3">
      <input
        value={search}
        onChange={handleChange}
        type="text"
        className="form-control"
        placeholder="Type to search..."
      />
      <Button onClick={handleSubmit}>Search</Button>
    </div>
  );
};

// export class ArticlesSearch extends Component {
//   state = {
//     search: "",
//   };

//   handleChange = (event) => {
//     const { value } = event.target;
//     this.setState({ search: value });
//   };

//   handleSubmit = () => {
//     this.props.onSubmit(this.state.search)
//   };

//   render() {
//     const { search } = this.state;
//     return (
//       <div className="input-group mb-3">
//         <input
//           value={search}
//           onChange={this.handleChange}
//           type="text"
//           className="form-control"
//           placeholder="Type to search..."
//         />
//         <Button onClick={this.handleSubmit}>Search</Button>
//       </div>
//     );
//   }
// }
