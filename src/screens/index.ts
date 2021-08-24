import Iscreen from 'types/screen';
import Home from 'screens/Home';
import Search from 'screens/Search/index';
import Profile from 'screens/Profile/index';

const screens: Iscreen[] = [
	{
		name: 'Home',
		componet: Home,
		options: {
			headerShown: false,
		},
	},
	{ name: 'Profile', componet: Profile, options: {} },
	{ name: 'Search', componet: Search, options: {} },
];
export default screens;
