import React from 'react';
import Accordion from './components/accordion';
import Search from './components/Search';

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

export default () => {
  return (
    <div>
      <br />
      <Search />
    </div>
  );
};
