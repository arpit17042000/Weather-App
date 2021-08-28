import React, { Component } from "react";


class Dropdown extends Component {
  state = {
    value: " ",
    lists: [
      { id: "1", country: "India" },
      { id: "2", country: "America" },
      { id: "3", country: "Russia" },
      { id: "4", country: "China" },
    ],
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    alert("A name was submitted: " + this.state.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your Country:
          <select value={this.state.value} onChange={this.handleChange}>
            {this.state.lists.map((list) => (
              <option value={list.country} key={list.id}>
                {list.country}
              </option>
            ))}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Dropdown;
