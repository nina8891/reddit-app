import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
} from '../actions/posts';

const initialState = {
  byId: {},
  allIds: [],
  posts: [],
  isFetched: false,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return {
        ...state,
        isFetched: true,
      };

    case GET_POSTS_SUCCESS:
      const { posts } = action.payload;

      return {
        ...state,
        byId: posts.reduce((acc, post) => {
          acc[post.data.id] = post;

          return acc;
        }, {}),
        allIds: posts.map(post => post.data.id),
        posts: posts,
        isFetched: false,
      };

    default:
      return state;
  }
}
