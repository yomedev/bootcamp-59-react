import { Component } from "react";

import { Button } from "../Button";

export class ArticlesSearch extends Component {
  state = {
    search: "",
  };

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ search: value });
  };

  handleSubmit = () => {
    this.props.onSubmit(this.state.search)
  };

  render() {
    const { search } = this.state;
    return (
      <div className="input-group mb-3">
        <input
          value={search}
          onChange={this.handleChange}
          type="text"
          className="form-control"
          placeholder="Type to search..."
        />
        <Button onClick={this.handleSubmit}>Search</Button>
      </div>
    );
  }
}
