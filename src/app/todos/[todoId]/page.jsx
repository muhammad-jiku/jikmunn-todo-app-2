import React from 'react';

const TodoId = ({ params }) => {
  const { todoId } = params;
  return (
    <div>
      <h1>Todo Id page: {todoId}</h1>
    </div>
  );
};

export default TodoId;
