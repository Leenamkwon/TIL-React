import React, { memo } from 'react';

const TodoInput = ({ item, handleChange, handleSubmit, editItem }) => {
  return (
    <div className='card card-body my-3'>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className='input group'>
          <div className='input-group-prepend'>
            <div className='input-group-text bg-primary text-white'>
              <i className='fas fa-book'></i>
            </div>
            <input
              type='text'
              className='form-control text-capitalize'
              placeholder='add todo item..'
              value={item}
              onChange={(e) => handleChange(e.target.value)}
            />
          </div>
          <button
            type='submit'
            disabled={item ? false : true}
            className={
              editItem
                ? 'btn btn-block btn-success mt-3'
                : 'btn btn-block btn-primary mt-3'
            }
          >
            {editItem ? 'EDIT ITEM' : 'ADD ITEM'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default memo(TodoInput);
