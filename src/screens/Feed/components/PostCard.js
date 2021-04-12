import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import { Divider } from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const PostCard = ({combinedPost}) => {
	const [commentsVisible, setCommentsVisible] = useState(false);
	
	return (
		<View>
			<TouchableOpacity style={styles.todoCard} onPress={() => setCommentsVisible(!completed)}>
				{/* <Image
					style={{width: 65, height: 65, borderRadius: 65/2, marginLeft: 15}}
					resizeMode="cover"
					source={{ uri: combinedPost.user.avatar }}
				/> */}
				<View style={{maxWidth: '85%'}}>
					<Text>Test</Text>
					<Text style={styles.text}>{combinedPost.post.title}</Text>
				</View>
				<TouchableOpacity 
					style={{position: 'absolute', right: 15}}
					
				>
					<AntDesign name={'checkcircle'} size={38} color={completed ? '#98FB5C' : '#F56949'}/>
				</TouchableOpacity>
			</TouchableOpacity>
			<Divider style={{marginTop: 7, marginBottom: 7}}/>
		</View>
	)
}


const styles = StyleSheet.create({
	text: {
		textAlign: 'center',
		marginTop: 20
	},
	postCard: {
		flexDirection: 'row',
		marginTop: 10,
		marginBottom: 10,
		borderWidth: 1
	}
})