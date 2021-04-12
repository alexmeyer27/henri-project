import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { Divider } from 'react-native-elements';
import { BallIndicator } from 'react-native-indicators';

import { TodoCard } from './components/TodoCard';

const axios = require('axios');


export const TodosScreen = () => {
	const [todos, setTodos] = useState([]);
	const [isGettingTodos, setIsGettingTodos] = useState(true);

	useEffect(() => {		
		let todos;
		axios.get('https://jsonplaceholder.typicode.com/todos/')
			.then(function (response) {
				todos = response.data
			})
			.catch(function(error){
				getTodosFailed = true;
				setIsGettingTodos(false);
			})
			.then(function () {
				setTodos(todos);
				todos && todos.length > 0 ? setIsGettingTodos(false) : setIsGettingTodos(true);
			})
	}, []);

	return (
		(isGettingTodos === true ? <BallIndicator color="orange"/> : 
		<SafeAreaView>
			<Text style={styles.text} >Todos</Text>
			<Divider/>
			<FlatList 
				data={todos ? todos : null}
				renderItem={(todo) => (
					<TodoCard
						todo={todo}
					/>
				)}
				keyExtractor={(todo) => todo.id.toString()}
				style={{margin: 20}}
			/>				
		</SafeAreaView>
		)
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