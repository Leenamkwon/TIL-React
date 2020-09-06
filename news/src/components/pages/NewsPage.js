import React, { Fragment } from 'react';
import NewsList from '../NewsList';

const NewsPage = ({ match }) => {
  const category = match.params.categories || 'all';

  return (
    <Fragment>
      <NewsList category={category} />
    </Fragment>
  );
};

export default NewsPage;
