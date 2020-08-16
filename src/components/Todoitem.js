import React from "react";
import PropTypes from "prop-types";

class Todoitem extends React.Component {
  //function for dynamic styling of todoitems
  getStyle = () => {
    return {
      backgroundColor: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  render() {
    const { id, title } = this.props.todo; //destructuring the props into single variables for ease of use
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)} //binding this and id to use in App.js
          />{" "}
          {"  "}
          {title}
          <button
            className="del-btn"
            onClick={this.props.delTodo.bind(this, id)}
          >
            x
          </button>
        </p>
      </div>
    );
  }
}

//PropTypes
Todoitem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default Todoitem;
