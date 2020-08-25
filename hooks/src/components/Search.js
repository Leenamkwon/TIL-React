import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [debouncedTerm, setDebounceTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounceTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm,
        },
      });

      if (!data.error) {
        setResults(data.query.search);
      } else {
        setResults([]);
      }
    };

    search();
  }, [debouncedTerm]);

  const renderedResults = results.map((result) => {
    return (
      <div className='item' key={result.pageid}>
        <div className='right floated content'>
          <a
            className='ui button'
            href={`https://en.wikipedia.org/wiki/${result.title}`}
          >
            Go
          </a>
        </div>
        <div className='content'>
          <div className='header'>{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  const bool = () => {
    if (results.length) {
      return renderedResults;
    } else {
      return '';
    }
  };

  // [] 처음 마운트 한번 만
  // [data] 처음 한 번, 그 후 특정 데이터가 업데이트 될 떄마다
  // 2번쨰 params에 아무것도 안 넣으면 every rerender 합니다.

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Search Term</label>
          <input
            className='input'
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className='ui celled list'>{bool()}</div>
    </div>
  );
};

export default Search;
