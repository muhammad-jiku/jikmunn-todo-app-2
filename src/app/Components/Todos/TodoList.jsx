import Link from 'next/link';
import React from 'react';

const fetchTodos = async () => {
  // timeout for random number of seconds between 1 and 5
  const timeout = Math.floor(Math.random() * 5 + 1) * 1000;
  await new Promise((resolve) => setTimeout(resolve, timeout));

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
