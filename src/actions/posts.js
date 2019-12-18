export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';

export function getPosts() {
  return dispatch => {
    dispatch({
      type: GET_POSTS_REQUEST,
    });

    fetch('https://www.reddit.com/subreddits/popular.json')
      .then(response => response.json())
      .then(result => {
        dispatch({
          type: GET_POSTS_SUCCESS,
          payload: {
            posts: result.data.children,
          },
        });
      });
  };
}
