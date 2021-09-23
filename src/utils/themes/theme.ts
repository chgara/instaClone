// import { useColorScheme } from 'react-native';

// const colorScheme = useColorScheme();
// const isDark: boolean = colorScheme === 'dark';

const theme = {
	colors: {
		// primary: isDark ? 'black' : 'white',
		// secondary: isDark ? 'white' : 'black',
		primary: 'white',
		secondary: 'black',
		third: '#4FD6BB',
		fourth: '#36BEC6',
		white: 'white',
		black: 'black',
		grey: '#ced4da',
		accent: 'red',
		transparent: 'rgba(0,0,0,0)',
		transparentWhite: 'rgba(255, 255, 255, 0.74)',
		mainGradient: ['#4FD6BB', '#36BEC6'],
	},
	border: {
		rounded: 30,
		roundedMain: 30,
		roundedMin: 5,
	},
	icons: {
		normal: 24,
	},
	elevation: {
		normal: 5,
		medium: 12,
		high: 20,
	},
};
export default theme;
