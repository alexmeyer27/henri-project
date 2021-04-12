import { createReducer } from '../reducerCreator';

export const GET_POSTS = 'GET_POSTS';
export const GET_COMMENTS = 'GET_COMMENTS';

export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';

export const COMBINE_POSTS = 'COMBINE_POSTS'


const defaultState = {
	posts: [],
	getPostsFailed: false,
	comments: [],
	getCommentsFailed: [],
	combinedPosts: []
}

const feedReducer = createReducer(defaultState, {
	[GET_POSTS](state, action) {
		return {
			...state,
			posts: action.posts,
			getPostsFailed: action.getPostsFailed
		}
	},
	[GET_COMMENTS](state, action) {
		return {
			...state,
			comments: action.comments,
			getCommentsFailed: action.getCommentsFailed
		}
	},
	[CREATE_POST](state, action) {
		let posts = state.posts;
		let addedPosts = posts.push(action.post)
		
		return {
			...state,
			posts: addedPosts
		}
	},
	[DELETE_POST](state, action) {
		let posts = state.posts;
		let newPostList = posts.filter(post => post.id !== action.post.id);
		
		return {
			...state,
			posts: newPostList
		}
	},
	[COMBINE_POSTS](state, action) {
		return {
			combinedPosts: action.combinedPosts
		}
	}
})

export function getfeed() {
	return {
		type: GET_FEED
	}
}


export const namespace = 'feed';
export const local = state => state[namespace];
export default feedReducer;