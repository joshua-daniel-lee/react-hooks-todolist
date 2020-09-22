import React from "react";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import CheckIcon from "@material-ui/icons/Check";
import Typography from "@material-ui/core/Typography";

//Functional component for todos
function Todo({ index, todo, completeTodo, removeTodo }) {
  return (
    <Card
      style={{ textDecoration: todo.isComplete ? "Line-through" : "" }}
      className="todo"
    >
      <Typography>{todo.task}</Typography>
      <div>
        <IconButton onClick={() => completeTodo(index)}>
          <CheckIcon />
        </IconButton>
        <IconButton onClick={() => removeTodo(index)}>
          <DeleteForeverIcon />
        </IconButton>
      </div>
    </Card>
  );
}

export default Todo;
