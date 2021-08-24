import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import StyledText from 'components/StyledText';
import theme from 'utils/themes/theme';
import { width } from 'utils/constants/dimensions';
import InstaCloneIcons from 'utils/icons';

const HomeHeader: React.FC = () => {
	return (
		<View style={styles.header}>
			<View style={styles.button}>
				<InstaCloneIcons
					name='Setting'
					size={24}
					color={theme.colors.secondary}
				/>
			</View>
			<View style={styles.logo}>
				<StyledText white bold uppercase>
					Instagram
				</StyledText>
			</View>
			<View style={styles.button}>
				<InstaCloneIcons
					name='Message'
					size={24}
					color={theme.colors.secondary}
				/>
			</View>
		</View>
	);
};
export default HomeHeader;

const currentHeight = StatusBar.currentHeight
	? StatusBar.currentHeight
	: 0;
const paddingTop = StatusBar.currentHeight
	? currentHeight + currentHeight / 10
	: 50;

const borderSize = width / 5.5;
const styles = StyleSheet.create({
	header: {
		width: '100%',
		backgroundColor: theme.colors.primary,
		paddingTop: paddingTop,
		paddingBottom: '4%',
		paddingHorizontal: borderSize / 4,
		flexDirection: 'row',
		alignItems: 'center',
	},
	logo: {
		alignItems: 'center',
		flex: 4,
	},
	button: {
		height: '100%',
		alignItems: 'center',
	},
});
