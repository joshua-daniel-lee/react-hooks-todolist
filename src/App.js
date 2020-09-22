import React, { useState } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Typography from "@material-ui/core/Typography";
import "./App.css";

//This is the main application. State is set using the useState() Hook
function App() {
  //Application state for all todos
  const [todos, setTodos] = useState([
    {
      task: "Learn the 'useState()' Hook",
      isComplete: false,
    },
    {
      task: "Build a Todo App Using 'useState()'",
      isComplete: false,
    },
    {
      task: "Upload This Repo to Github",
      isComplete: false,
    },
  ]);

  //Function to add todos
  const addTodo = (task) => {
    const newTodos = [...todos, { task }];
    setTodos(newTodos);
  };

  //Function to show completed todo
  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isComplete = true;
    setTodos(newTodos);
  };

  //Function to remove a todo from the list, and the state
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <Typography color="Inherit" variant="h2" gutterBottom>
        Josh's Todo List
      </Typography>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
