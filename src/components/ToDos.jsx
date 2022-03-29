import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo, deleteToDo } from "../redux/toDo";

const TodoItem = React.memo(({ todo, onDelete }) => {
  return (
    <li style={{ textDecoration: todo.done ? "line-through" : "none" }}>
      {todo.text}
      <button onClick={() => onDelete(todo.id)}>DEL</button>
    </li>
  );
});

const TodoList = React.memo(({ todos, onDelete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </ul>
  );
});

const Todos = () => {
  const [text, setText] = useState("");

  const todos = useSelector((state) => state.toDoReducer);

  const dispatch = useDispatch();

  const onCreate = (text) => dispatch(addToDo(text));
  const onDelete = useCallback((id) => dispatch(deleteToDo(id)), [dispatch]); // 최적화를 위해 useCallback 사용

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(text);
    setText("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={text}
          placeholder="할 일을 입력하세요.."
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <TodoList todos={todos} onDelete={onDelete} />
    </div>
  );
};

export default Todos;
