import React, { useState, useEffect } from 'react';
import Accordion from './components/accordion';
import Search from './components/Search';
import Dropdown from './components/dropdown';
import Translate from './components/translate';
import Route from './components/Route';
import Header from './components/header';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework',
    id: 0,
  },
  {
    title: 'Why use React?',
    content: 'React is a front end javascript framework',
    id: 1,
  },
  {
    title: 'How do you use React?',
    content: 'You use React by Reacting',
    id: 2,
  },
];

const options = [
  {
    label: 'The color Red',
    color: 'red',
  },
  {
    label: 'The color Blue',
    color: 'blue',
  },
  {
    label: 'The color Yellow',
    color: 'Yellow',
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <br />
      <Route path='/'>
        <Accordion items={items} />
      </Route>
      <Route path='/search'>
        <Search />
      </Route>
      <Route path='/dropdown'>
        <Dropdown
          label='Select a color'
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
    </div>
  );
};
