import SingleTodo from '../../Components/Todos/SingleTodo';
import React from 'react';

// const fetchTodo = async (todoId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/todos/${todoId}`
//   );
//   const todo = res.json();
//   return todo;
// };

const TodoId = async ({ params }) => {
  //   const { todoId } = params;
  //   const todo = await fetchTodo(todoId);
  //   console.log(todo);
  return (
    // <div>
    //   <h1>Todo Id page: {todoId}</h1>
    // </div>
    <SingleTodo params={params} />
  );
};

export default TodoId;
