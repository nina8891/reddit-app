import {GET_SUBS} from '../actions/actions'

const initialState = {
    posts: []
} 

export default function rootReducer (state = initialState, action) {
    switch (action.type) {
        case GET_SUBS:
            return {
                posts: action.posts
            }
        default:
            return state

    }
}