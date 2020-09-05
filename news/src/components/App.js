import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  return <Route path='/:categories?' component={NewsPage}></Route>;
};

export default App;
