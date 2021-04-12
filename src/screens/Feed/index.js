import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { Divider } from 'react-native-elements';
import { PostCard } from './components/PostCard';

import { useSelector, useDispatch } from 'react-redux';
import { getposts, getcomments, createcombinedposts, deletepost, createpost } from '../../redux/reducers/feed/actions';

export const FeedScreen = () => {
	
	const users = useSelector(state => state.users);
	const feed = useSelector(state => state.feed)
	const dispatch = useDispatch();

	const getPosts = () => dispatch(getposts());
	const getComments = () => dispatch(getcomments());
	const createCombinedPosts = (combinedPosts) => dispatch(createcombinedposts(combinedPosts));
	const deletePost = (postId) => dispatch(deletepost(postId));
	const createPost = (post) => dispatch(createpost(post));
	
	useEffect(() => {		
		if (feed.posts.length === 0 || feed.comments.length === 0){
			getPosts();
			getComments();
		}
	}, []);


	const buildCombinedPosts = (posts, comments, users) => {	
		let combinedPosts = [];		
		posts.forEach((post, index) => {
			combinedPosts.push(
				{
					post: post,
					comments: comments.filter(comment => comment.postId === post.id),
					user: users.filter(user => user.id === post.userId)
				}
			)
		});

		console.log(combinedPosts);
	}
	
	return (
		<SafeAreaView>
			<Text style={styles.text}>Feed</Text>
			<Divider/>
			<FlatList 
				data={buildCombinedPosts(feed.posts, feed.comments, users.users)}
				renderItem={(combinedPost) => (
					<PostCard
						combinedPost={combinedPost}
					/>
				)}
				keyExtractor={(post) => post.id.toString()}
				style={{margin: 20}}
			/>				
		</SafeAreaView>
	)
}


const styles = StyleSheet.create({
	text: {
		textAlign: 'center',
		marginTop: 20,
		fontSize: 20,
		marginBottom: 10
	},
})