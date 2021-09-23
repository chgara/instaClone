import Iscreen from 'types/screen';
import Home from 'screens/Home';
import Search from 'screens/Search/index';
import Profile from 'screens/Profile/index';
import Auth from './Auth';
import Initial from './Initial';
import StackParamList, { AuthParamList } from 'types/ParamLists';

const mainScreens: Iscreen<StackParamList>[] = [
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
export const authScreens: Iscreen<AuthParamList>[] = [
	{
		name: 'Initial',
		componet: Initial,
		options: { headerShown: false },
	},
	{
		name: 'Auth',
		componet: Auth,
		options: { headerShown: false },
	},
];
export default mainScreens;
