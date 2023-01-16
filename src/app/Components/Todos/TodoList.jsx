import Link from 'next/link';
import React from 'react';

const fetchTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = res.json();
  return todos;
};

const TodoList = async () => {
  const todos = await fetchTodos();

  return (
    <>
      {todos.map((todo, idx) => (
        <p key={idx}>
          <Link href={`/todos/${todo.id}`}>Todo: {todo.id}</Link>
        </p>
      ))}
    </>
  );
};

export default TodoList;
