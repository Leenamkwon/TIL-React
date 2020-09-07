import React, { memo } from 'react';

const TodoItem = ({ title, handleEdit, handleDelete }) => {
  return (
    <li className='list-group-item text-capitalize justify-content-between my-2'>
      <h6>{title}</h6>
      <div className='todo-icon'>
        <span className='max-2 text-success' onClick={handleEdit}>
          <i className='fas fa-pen'></i>
        </span>
        <span className='max-2 text-danger' onClick={handleDelete}>
          <i className='fas fa-trash'></i>
        </span>
      </div>
    </li>
  );
};

export default memo(TodoItem);
