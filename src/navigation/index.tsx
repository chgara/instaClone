import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigators from 'navigation/Navigators';
import screens from 'screens';

const Navigation: React.FC = () => {
	return (
		<NavigationContainer>
			<Navigators screens={screens} />
		</NavigationContainer>
	);
};
export default Navigation;
