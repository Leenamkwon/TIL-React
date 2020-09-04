import _ from 'lodash';
import jsonPlaceholder from '../api/jsonplaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPost());

  // const userIds = _.uniq(_.map(getState().posts, 'userId'));
  // userIds.forEach((id) => dispatch(fetchUser(id)));

  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
};

export const fetchPost = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};

/* SLOTION 1 */
// export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({ type: 'FETCH_USER', payload: response.data });
// });
