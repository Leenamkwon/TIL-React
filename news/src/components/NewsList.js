import React from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';
import usePromise from '../lib/usePromise';

const NewsList = ({ category }) => {
  const fetchData = () => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=12f5d992fe90498995892c4b706369cd`
    );
  };

  const [response] = usePromise(fetchData, category);

  const mapToRender = () => {
    if (response) {
      return response.map((article) => {
        return <NewsItem key={article.url} article={article} />;
      });
    } else {
      return null;
    }
  };

  return <div>{mapToRender()}</div>;
};

export default NewsList;
