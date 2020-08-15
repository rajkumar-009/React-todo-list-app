//Component for Adding todo items
import React from "react";

class AddTodo extends React.Component {
  state = {
    title: ""
  };

  titleChange = e => this.setState({ title: e.target.value });

  render() {
    return (
      //form to get the todo item title
      <form style={{ display: "flex" }}>
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
          value="Submit"
          className="add-btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

export default AddTodo;
