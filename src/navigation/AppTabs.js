import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

import UsersScreen from '../screens/Users/index.js';
import { FeedScreen } from '../screens/Feed/index.js';
import { TodosScreen } from '../screens/Todos/index.js';

const Tabs = createBottomTabNavigator()


class AppTabs extends React.Component {
	render(){
		return (
			<Tabs.Navigator 
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
					let iconName;
	
					if (route.name === 'Users') {
						iconName = 'users';
						return <Feather name={iconName} size={size} color={color} />;
					} else if (route.name === 'Feed') {
						iconName = 'comments';
						return <FontAwesome name={iconName} size={size} color={color} />;
					} else if (route.name === 'Todos') {
						iconName = 'checkcircle';
						return <AntDesign name={iconName} size={size} color={color} />;
					} else {
						console.log('no route')
					}

					return <Ionicons name={iconName} size={size} color={color} />;
					},
				})}
				tabBarOptions={{
					activeTintColor: 'tomato',
					inactiveTintColor: 'gray',
				}}
			>
				<Tabs.Screen name='Users' component={UsersScreen}/>
				<Tabs.Screen name='Feed' component={FeedScreen}/>
				<Tabs.Screen name='Todos' component={TodosScreen}/>  
			</Tabs.Navigator>
		)
	}
}

export default AppTabs;