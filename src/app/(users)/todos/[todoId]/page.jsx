import React from 'react';

// internal import
import SingleTodo from '../../../Components/Todos/SingleTodo';

const TodoId = async ({ params }) => {
  const { todoId } = params;
  return <SingleTodo todoId={todoId} />;
};

export default TodoId;

export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
    next: { revalidate: 60 },
  });
  const todos = await res.json();

  return todos.map((todo) => ({
    todoId: todo.id.toString(),
  }));
}
