import React from 'react';
import Stack from 'navigation/Stack';
import Iscreen from 'types/screen';

const Navigators: React.FC<Iprops> = ({ screens }) => {
	// TODO: Make the header to display only in selected screens
	//
	/* const Header = (screen:Iscreen)=>{ */
	/* 	let options = {}; */
	/* 	if(screen.name === 'Home'){ */
	/* 		options. */
	/* 	} */
	/* } */

	return (
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
};
export default Navigators;
interface Iprops {
	screens: Iscreen[];
}
