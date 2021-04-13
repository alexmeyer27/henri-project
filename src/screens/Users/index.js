import React, { Component, useEffect, useState } from 'react';
import { Text, StyleSheet, SafeAreaView, View, Image, ScrollView } from 'react-native';
import { Card, Divider } from 'react-native-elements';
import { BallIndicator } from 'react-native-indicators';

const axios = require('axios');

import { useSelector, useDispatch } from 'react-redux';
import { getusers, getfaces } from '../../redux/reducers/user/actions';

export default function UsersScreen() {

	const users = useSelector(state => state.users);
	const dispatch = useDispatch();

	const getUsers = (users, getUsersFailed) => dispatch(getusers(users, getUsersFailed));
	const getFaces = (faces, getFacesFailed) => dispatch(getfaces(faces, getFacesFailed));

	const [isGettingUsers, setIsGettingUsers] = useState(false);
	const [isGettingFaces, setIsGettingFaces] = useState(false);


	useEffect(() => {		
		setIsGettingUsers(true);
		setIsGettingFaces(true);
		
		let users;
		let getUsersFailed = false;
		
		let faces;
		let getFacesFailed = false;

		//get users
		axios.get('https://jsonplaceholder.typicode.com/users/')
			.then(function(response) {
				users = response.data;
			})
			.catch(function(error){
				getUsersFailed = true;
			})
			.then(function () {
				getUsers(users, getUsersFailed);
				setIsGettingUsers(false);
			});

		//get faces
		axios({
			method: 'get',
			url: 'https://uifaces.co/api',
			headers: { 'X-API-KEY': '98E27201-9AED4764-9B4C5FD2-DE0FB3EB' }
		})
			.then(function(response) {
				faces = response.data;
			})
			.catch(function(error){
				getFacesFailed = true;
			})
			.then(function () {
				getFaces(faces, getFacesFailed);
				setIsGettingFaces(false);
			});
	}, []);
	
	return (
		(isGettingUsers || isGettingFaces ? <BallIndicator color="orange"/> : 
		<SafeAreaView>
			<ScrollView>
				<Card>
					<Card.Title>USERS</Card.Title>
					<Card.Divider/>
					{
						users.users.map((users, i) => {
						return (
							<View style={{marginBottom: 10}}>
								<View key={i} style={styles.userCard}>
									<View>
										<Image
											style={styles.avatar}
											resizeMode="cover"
											source={{ uri: users.avatar }}
										/>
									</View>
									<View style={{flexDirection: 'column'}}>
										<Text style={styles.user}>{users.name}</Text>
										<Text style={styles.user}>{users.email}</Text>
										<Text style={styles.user}>{users.phone}</Text>
									</View>
								</View>
								<View>
										<Divider style={{marginTop: 7, marginBottom: 7}}/>
								</View>
							</View>	
						);
						})
					}
				</Card>
			</ScrollView>
		</SafeAreaView>
		)
	)

}


const styles = StyleSheet.create({
	avatar: {
		width: 65,
		height: 65,
		borderRadius: 65/2,
		marginLeft: 15
	},
	user: {
		fontWeight: '500',
		marginLeft: 40
	},
	userCard: {
		flexDirection: 'row',
		marginTop: 10,
		marginBottom: 10
	},

})