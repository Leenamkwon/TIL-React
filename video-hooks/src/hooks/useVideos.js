import { useState, useEffect } from 'react';
import youtube from '../components/youtube';

const KEY = 'AIzaSyD2cfClP8fqYDhK-J1b7ZtCO13c8sDR1RA';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    try {
      const res = await youtube.get('/search', {
        params: {
          q: term,
          part: 'snippet',
          maxResults: 5,
          key: KEY,
          type: 'video',
        },
      });

      setVideos(res.data.items);
    } catch (err) {
      console.log('할당량이 초과되었습니다.');
    }
  };

  return [videos, search];
};

export default useVideos;
