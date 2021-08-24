import React from 'react';
import { StyleSheet, View } from 'react-native';
import InstaCloneIcons from 'utils/icons';
import theme from 'utils/themes/theme';

const Footer: React.FC = () => {
	return (
		<View style={styles.footer}>
			<InstaCloneIcons
				name='Home'
				size={24}
				color={theme.colors.secondary}
			/>
			<InstaCloneIcons
				name='Search'
				size={24}
				color={theme.colors.secondary}
			/>
			<InstaCloneIcons
				name='Plus'
				size={24}
				color={theme.colors.secondary}
			/>
			<InstaCloneIcons
				name='Heart'
				size={24}
				color={theme.colors.secondary}
			/>
			<InstaCloneIcons
				name='Profile'
				size={24}
				color={theme.colors.secondary}
			/>
		</View>
	);
};
export default Footer;

const styles = StyleSheet.create({
	footer: {
		width: '100%',
		backgroundColor: theme.colors.primary,
		paddingVertical: '5%',
		paddingHorizontal: '2%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		position: 'absolute',
		bottom: 0,
		borderTopEndRadius: theme.border.rounded,
		borderTopStartRadius: theme.border.rounded,
	},
});
