import React from 'react';

const fetchTodo = async (todoId) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`
  );
  const todo = res.json();
  return todo;
};

const SingleTodo = async ({ params }) => {
  const { todoId } = params;
  const todo = await fetchTodo(todoId);
  console.log(todo);
  return (
    <div className="p-10 bg-yellow-200 border-2 m-2 shadow-lg">
      <p>
        #{todo.id} : {todo.title}
      </p>
      <p>Completed: {todo.completed ? 'Yes' : 'No'} </p>
      <p className="border-t border-black mt-5 text-right">
        By User: {todo.userId}
      </p>
    </div>
  );
};

export default SingleTodo;
