import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigators, {
	AuthNavigators,
} from 'navigation/Navigators';
import mainScreens, { authScreens } from 'screens';
import AuthContext from 'context/Auth';

const Navigation: React.FC = () => {
	const { state } = useContext(AuthContext);
	return (
		<NavigationContainer>
			{state.isAuthed ? (
				<MainNavigators screens={mainScreens} />
			) : (
				<AuthNavigators screens={authScreens} />
			)}
		</NavigationContainer>
	);
};
export default Navigation;
