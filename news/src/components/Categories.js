import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'all',
    text: '전체보기',
  },
  {
    name: 'business',
    text: '비즈니스',
  },
  {
    name: 'entertainment',
    text: '엔터테인먼트',
  },
  {
    name: 'health',
    text: '건강',
  },
  {
    name: 'science',
    text: '과학',
  },
  {
    name: 'sports',
    text: '스포츠',
  },
  {
    name: 'technology',
    text: '기술',
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;

  .item {
    padding: 1rem;
    cursor: pointer;
  }
`;

const Categories = () => {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Link
          key={c.name}
          className='item'
          to={c.name === 'all' ? '/' : `/${c.name}`}
          exact='true'
        >
          {c.text}
        </Link>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
