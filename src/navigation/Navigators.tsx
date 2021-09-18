import React from 'react';
import Stack, { AuthStack } from 'navigation/Stack';
import Iscreen from 'types/screen';
import StackParamList, { AuthParamList } from 'types/ParamLists';

const MainNavigators: React.FC<MainNavigatorProps> = ({
	screens,
}) => (
	<Stack.Navigator screenOptions={{ animationEnabled: false }}>
		{screens.map((screen, index) => (
			<Stack.Screen
				key={Math.random() * 100 + index}
				name={screen.name}
				component={screen.componet}
				options={screen.options}
			/>
		))}
	</Stack.Navigator>
);

export const AuthNavigators: React.FC<AuthNavigatorProps> = ({
	screens,
}) => (
	<AuthStack.Navigator screenOptions={{ animationEnabled: false }}>
		{screens.map((screen, index) => (
			<AuthStack.Screen
				key={Math.random() * 100 + index}
				name={screen.name}
				component={screen.componet}
				options={screen.options}
			/>
		))}
	</AuthStack.Navigator>
);
export default MainNavigators;
interface MainNavigatorProps {
	screens: Iscreen<StackParamList>[];
}

interface AuthNavigatorProps {
	screens: Iscreen<AuthParamList>[];
}
