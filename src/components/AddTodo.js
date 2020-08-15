//Component for Adding todo items
import React from "react";
import PropTypes from "prop-types";

class AddTodo extends React.Component {
  state = {
    title: ""
  };

  titleChange = e => this.setState({ [e.target.name]: e.target.value }); //function to update title in state.

  //function to handle submit event
  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({
      title: ""
    });
  };

  render() {
    return (
      //form to get the todo item title
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          placeholder="Add an item to the list"
          value={this.state.title}
          onChange={this.titleChange}
          style={{ flex: "10", padding: "5px" }}
        />
        <input
          type="submit"
          value="Add"
          className="add-btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

//propTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default AddTodo;
