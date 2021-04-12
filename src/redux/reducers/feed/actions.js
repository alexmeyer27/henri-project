import { GET_POSTS, GET_COMMENTS, DELETE_POST, CREATE_POST, COMBINE_POSTS } from './reducer';

const axios = require('axios');

function fetchPosts() {
	return axios.get('https://jsonplaceholder.typicode.com/posts/')
}

dispatchPosts = (posts, getPostsFailed = false) => {
	return {
		type: GET_POSTS,
		posts: posts,
		getPostsFailed: getPostsFailed
	}
}	

export function getposts() {
	return function(dispatch){
		return fetchPosts().then(
			(posts) => dispatch(dispatchPosts(posts.data)),
			(error) => dispatch(dispatchPosts(posts = [], getPostsFailed = true))
		);
	}
}

function fetchComments() {
	return axios.get('https://jsonplaceholder.typicode.com/comments/')
}

dispatchComments = (comments, getCommentsFailed = false) => {
	return {
		type: GET_COMMENTS,
		comments: comments,
		getCommentsFailed: getCommentsFailed
	}
}

export function getcomments() {
	return function(dispatch){
		return fetchComments().then(
			(comments) => dispatch(dispatchComments(comments.data)),
			(error) => dispatch(dispatchComments(comments = [], getCommentsFailed = true))
		);
	}
}


export function createcombinedposts(combinedPosts) {
	console.log(combinedPosts);
	
	return {
		type: COMBINE_POSTS,
		combinedPosts: combinedPosts
	}
}

export function deletepost(postId) {
	return {
		type: DELETE_POST,
		postId: postId
	}
}

export function createpost(post) {
	return {
		type: CREATE_POST,
		post: post
	}
}