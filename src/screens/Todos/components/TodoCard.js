import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import { Divider } from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const TodoCard = ({todo}) => {
	const [completed, setCompletion] = useState(todo.item.completed);
	
	return (
		<View>
			<View style={styles.todoCard}>
				<View style={{maxWidth: '85%'}}>
					<Text style={styles.text}>{todo.item.title}</Text>
				</View>
				<TouchableOpacity 
					style={{position: 'absolute', right: 15}}
					onPress={() => setCompletion(!completed)}
				>
					<AntDesign name={'checkcircle'} size={38} color={completed ? '#98FB5C' : '#F56949'}/>
				</TouchableOpacity>
			</View>
			<Divider style={{marginTop: 7, marginBottom: 7}}/>
		</View>
	)
}


const styles = StyleSheet.create({
	text: {
		textAlign: 'center',
		marginTop: 20
	},
	todoCard: {
		flexDirection: 'row',
		marginTop: 10,
		marginBottom: 10,
		borderRadius: 1
	}
})