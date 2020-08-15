import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import Header from "./components/layout/Header";
// import { v4 as uuid } from "uuid";
import Axios from "axios";
import About from "./components/pages/About";

class App extends React.Component {
  state = {
    todos: []
  };

  //execute fetch request using axios library to fetch data from JSON placeholder
  componentDidMount() {
    Axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    ).then(res => this.setState({ todos: res.data }));
  }

  // markComplete function to toggle completed value dynamically
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };
  // function to delete a todolist item
  delTodo = id => {
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
    );
  };

  //function to add a new item to the list from AddTodo component
  addTodo = title => {
    Axios.post("https://jsonplaceholder.typicode.com/todos", {
      title: title,
      completed: false
    }).then(res =>
      this.setState({
        todos: [...this.state.todos, res.data]
      })
    );
  };

  render() {
    return (
      <Router>
        {" "}
        {/*Router is used to wrap the content to be displayed. Must be done when using router*/}
        <div>
          <div className="container">
            <Header />
            <Route
              path={["/", "/React-todo-list-app"]}
              exact
              render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />{" "}
            {/*Routes for each seperate page is needed*/}
            <Route path="/about" exact component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
