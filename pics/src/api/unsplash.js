import axios from 'axios';

export default axios.create({
  headers: {
    Authorization: 'Client-ID kWI3JbFh-hHHUtTeO9iaQUzyQVL666trnLTA8qpVOYY',
    'content-type': 'application/json',
  },
  baseURL: 'https://api.unsplash.com',
});
