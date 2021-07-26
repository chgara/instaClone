import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigators from 'navigation/Navigators';
import Iscreen from 'types/screen';

import Home from 'screens/Home';
import Search from 'screens/Search';
import Profile from 'screens/Profile';

const screens: Iscreen[] = [
	{ name: 'Home', componet: Home },
	{ name: 'Profile', componet: Profile },
	{ name: 'Search', componet: Search },
];

const Navigation: React.FC = () => {
	return (
		<NavigationContainer>
			<Navigators screens={screens} />
		</NavigationContainer>
	);
};
export default Navigation;
