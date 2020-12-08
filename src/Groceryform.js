import React from "react";

class GroceryForm extends React.Component {
  state = {
    name: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("name is on submit");
    console.log(this.state.name);
    // calling the function
    this.props.taco(this.state.name);

    this.setState({
      name: "",
    });
    // add this.state.name to todolist
  };

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      name: e.target.value,
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="add grocery"
        />
      </form>
    );
  }
}

export default GroceryForm;