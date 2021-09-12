// import { useColorScheme } from 'react-native';

// const colorScheme = useColorScheme();
// const isDark: boolean = colorScheme === 'dark';

const theme = {
	colors: {
		// primary: isDark ? 'black' : 'white',
		// secondary: isDark ? 'white' : 'black',
		primary: 'white',
		secondary: 'black',
		third: 'blue',
		white: 'white',
		black: 'black',
		grey: 'grey',
		accent: 'red',
		transparentWhite: 'rgba(255, 255, 255, 0.74)',
		mainGradient: ['#4FD6BB', '#36BEC6'],
	},
	border: {
		rounded: 35,
	},
	icons: {
		normal: 24,
	},
	elevation: {
		normal: 5,
		high: 20,
	},
};
export default theme;
