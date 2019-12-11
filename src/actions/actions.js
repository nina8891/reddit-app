export const GET_SUBS = 'GET_SUBS'

export function getSubs(json) {
    return {
        type: GET_SUBS,
        posts: json.data.children.map(child => child.data)
    }
}


export function fetchPosts() {
    return dispatch => {
      return fetch('https://www.reddit.com/subreddits/popular.json')
        .then(response => response.json())
        .then(json => dispatch(getSubs(json)))
    }
  }


