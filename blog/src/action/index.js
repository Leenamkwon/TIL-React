import jsonPlaceholder from '../api/jsonplaceholder';

export const fetchPost = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response });
};
