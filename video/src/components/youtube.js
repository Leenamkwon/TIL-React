import axios from 'axios';

const KEY = 'AIzaSyD2cfClP8fqYDhK-J1b7ZtCO13c8sDR1RA';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
  headers: {
    'content-type': 'application/json',
  },
});
