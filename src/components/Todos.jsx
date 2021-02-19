import React from "react";

const Todos = (props) => {
  const count = props.todos.length;

  return (
    <div>
      <p>You have {count} todos</p>
      <ul className="collection">
        {props.todos.map((todo) => (
          <li
            style={{ display: "flex", justifyContent: "space-between" }}
            className="collection-item"
            key={todo.id}
          >
            <span
              style={{
                flex: 1,
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              onClick={() => props.onClick(todo.id)}
            >
              {todo.title}
            </span>
            <div
              onClick={() => {
                props.deleteTodo(todo.id);
              }}
              className=" indigo lighten-2 btn-small"
            >
              <i className="material-icons">delete</i>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
