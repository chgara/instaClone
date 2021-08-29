import { StyleSheet } from 'react-native';
import theme from 'utils/themes/theme';
const styles = StyleSheet.create({
	bold: {
		fontWeight: 'bold',
	},
	light: {
		fontWeight: '300',
	},
	small: {
		fontSize: 12,
	},
	big: {
		fontSize: 20,
	},
	dark: {
		color: 'black',
	},
	white: {
		color: 'white',
	},
	text: {
		fontSize: 16,
		color: theme.colors.secondary,
		fontFamily: 'Poppins-regular',
		fontWeight: 'normal',
	},
	uppercase: {
		textTransform: 'uppercase',
	},
});
export default styles;
