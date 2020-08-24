import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  async onSearchSubmit(term) {
    const res = await axios.get('https://api.unsplash.com/search/photos', {
      headers: {
        Authorization: 'Client-ID kWI3JbFh-hHHUtTeO9iaQUzyQVL666trnLTA8qpVOYY',
        'content-type': 'application/json',
      },
      query: term,
    });

    console.log(res);
  }

  render() {
    return (
      <div className='ui container' style={{ marginTop: '20px' }}>
        <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
      </div>
    );
  }
}

export default App;
