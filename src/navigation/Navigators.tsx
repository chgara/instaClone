import React from 'react';
import Stack from 'navigation/Stack';
import Iscreen from 'types/screen';

const Navigators: React.FC<props> = ({ screens }) => (
	<Stack.Navigator>
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
export default Navigators;
interface props {
	screens: Iscreen[];
}
