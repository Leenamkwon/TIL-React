import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';
import Categories from '../components/Categories';

const App = () => {
  return (
    <div>
      <Categories />
      <Route path='/:categories?' component={NewsPage}></Route>
    </div>
  );
};

export default App;
