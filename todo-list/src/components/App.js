import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import TodoList from './TodoList';
import TodoInput from './TodoInput';

const App = () => {
  const [items, setItems] = useState([
    { id: 1, title: 'wake up' },
    { id: 2, title: 'sleep' },
  ]);
  const [id, setId] = useState(uuidv4());
  const [item, setItem] = useState('');
  const [editItem, setEditItem] = useState(false);

  const handleChange = (term) => setItem(term);

  const handleSubmit = (e) => {
    console.log('hi');
    e.preventDefault();
    const newItem = { id: id, title: item };
    setItems([...items, newItem]);
    setItem('');
    setId(uuidv4());
    setEditItem(false);
  };

  const clearList = () => setItems([]);
  const handleDelete = (id) => {
    const update = items.filter((todo) => todo.id !== id);
    setItems(update);
  };
  const handleEdit = (id) => {
    const update = items.filter((todo) => todo.id !== id);
    const selectedItem = items.find((item) => item.id === id);
    setItems(update);
    setItem(selectedItem.title);
    setId(id);
    setEditItem(true);
  };

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-8 mt-5'>
            <h3 className='text-capitalize text-center'>Todo Input</h3>
            <TodoInput
              item={item}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              editItem={editItem}
            />
            <TodoList
              items={items}
              clearList={clearList}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
