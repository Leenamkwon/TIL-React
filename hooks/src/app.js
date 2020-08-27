import React, { useState, useEffect } from 'react';
import Accordion from './components/accordion';
import Search from './components/Search';
import Dropdown from './components/dropdown';
import Translate from './components/translate';

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

const showAccordion = () => {
  if (window.location.pathname === '/') {
    return <Accordion items={items} />;
  }
};

export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <br />
      {showAccordion()}
    </div>
  );
};
