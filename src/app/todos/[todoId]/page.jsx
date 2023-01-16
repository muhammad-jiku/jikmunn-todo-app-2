import SingleTodo from '../../Components/Todos/SingleTodo';
import React from 'react';

const TodoId = async ({ params }) => {
  return <SingleTodo params={params} />;
};

export default TodoId;
