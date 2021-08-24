import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigators from 'navigation/Navigators';
import screens from 'screens';

const Navigation: React.FC = () => {
	return (
		<NavigationContainer>
			<MainNavigators screens={screens} />
		</NavigationContainer>
	);
};
export default Navigation;
