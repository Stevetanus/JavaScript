import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

function TodoApp() {
  const [todos, setTodos] = useState([]);

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        <TodoForm todos={todos} setTodos={setTodos} />
        {todos.map((todo, index) => (
          <TodoItem
            todo={todo}
            key={index}
            index={index}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoApp;

// TodoItem.js
// import React from 'react';

function TodoItem({ todo, index, completeTodo, removeTodo }) {
  return (
    <div>
      <div className="singleTodoItem">
        <div>
          <p className={todo.isCompleted ? "marked" : ""}>{todo.text}</p>
          <button
            className="markCompleteTodoItem"
            onClick={() => completeTodo(index)}
          >
            Complete
          </button>
          <button className="removeTodoItem" onClick={() => removeTodo(index)}>
            X
          </button>
        </div>
      </div>
    </div>
  );
}

// export default TodoItem;

// TodoForm.js
// import React, { useState } from 'react';
function TodoForm({ todos, setTodos }) {
  const [value, setValue] = useState("");
  const handleText = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    setTodos([...todos, { text: value }]);
    console.log(todos);
    setValue("");
    e.preventDefault();
    // setTodo(task)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="itemInput"
        id="text"
        value={value}
        onChange={handleText}
      />
      <button className="addItemButton">Add Item</button>
    </form>
  );
}

// export default TodoForm;
