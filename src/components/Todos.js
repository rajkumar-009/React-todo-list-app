import React from "react";
import Todoitem from "./Todoitem";
import PropTypes from "prop-types";

class Todos extends React.Component {
  render() {
    //higher order map function to loop through the todos and render each todoitem component
    return this.props.todos.map(todo => (
      <Todoitem
        key={todo.id} //key is important as map function returns a list with unique keys
        todo={todo}
        markComplete={this.props.markComplete}
      />
    ));
  }
}

//PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired
};
export default Todos;
