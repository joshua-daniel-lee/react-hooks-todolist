import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

//Functional component that provides the TodoForm for user input
function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        label="Add Todo + Enter"
        variant="outlined"
        className="input"
        type="text"
        fullWidth="true"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

export default TodoForm;
