import React, { memo } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ items, clearList, handleDelete, handleEdit }) => {
  const renderItem = (items) => {
    if (!items) {
      return null;
    }
    return items.map((item) => (
      <TodoItem
        key={item.id}
        title={item.title}
        handleDelete={() => handleDelete(item.id)}
        handleEdit={() => handleEdit(item.id)}
      />
    ));
  };

  return (
    <ul className='list-group my-5'>
      <h3 className='text-capitalize text-center'>todo list</h3>
      {renderItem(items)}
      <button
        type='button'
        className='btn btn-danger btn-block text-uppercase mt-5'
        onClick={clearList}
      >
        clear List
      </button>
    </ul>
  );
};

export default memo(TodoList);
