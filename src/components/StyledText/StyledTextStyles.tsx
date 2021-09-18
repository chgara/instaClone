import { StyleSheet } from 'react-native';
import theme from 'utils/themes/theme';
const styles = StyleSheet.create({
	bold: {
		fontFamily: 'Poppins-medium',
	},
	bolder: {
		fontFamily: 'Poppins-bold',
	},
	light: {
		fontWeight: '300',
	},
	small: {
		fontSize: 14,
	},
	smaller: {
		fontSize: 12,
	},
	big: {
		fontSize: 20,
	},
	bigger: {
		fontSize: 25,
	},
	dark: {
		color: 'black',
	},
	white: {
		color: 'white',
	},
	text: {
		fontSize: 16,
		color: theme.colors.grey,
		fontFamily: 'Poppins-regular',
		fontWeight: 'normal',
	},
	uppercase: {
		textTransform: 'uppercase',
	},
});
export default styles;
