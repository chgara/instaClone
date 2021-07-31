import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackHeaderProps } from '@react-navigation/stack';
import Navigators from 'navigation/Navigators';
import Iscreen from 'types/screen';

import Home from 'screens/Home';
import HomeHeader from 'components/Layout/Headers/HomeHeader';
import Search from 'screens/Search/index';
import Profile from 'screens/Profile/index';

const screens: Iscreen[] = [
	{
		name: 'Home',
		componet: Home,
		options: {
			/* headerTitle: (props: any) => ( */
			/* 	<HomeHeader {...props} /> */
			/* ), */
			header: (props: StackHeaderProps) => (
				<HomeHeader {...props} />
			),
		},
	},
	{ name: 'Profile', componet: Profile, options: {} },
	{ name: 'Search', componet: Search, options: {} },
];

const Navigation: React.FC = () => {
	return (
		<NavigationContainer>
			<Navigators screens={screens} />
		</NavigationContainer>
	);
};
export default Navigation;
