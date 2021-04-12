import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppTabs from './AppTabs';

class Routes extends React.Component {
	render() {
		return (
			<NavigationContainer>	
				<AppTabs/>
			</NavigationContainer>
			);
	}
}

export default Routes;
