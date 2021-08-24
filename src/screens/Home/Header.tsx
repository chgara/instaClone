import React from 'react';
import { StyleSheet, View, StatusBar, Image } from 'react-native';
import StyledText from 'components/StyledText';
import theme from 'utils/themes/theme';
import { width } from 'utils/constants/dimensions';
import InstaCloneIcons from 'utils/icons';
import InstaLogo from 'assets/images/instagramLogo.png';

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
				<Image source={InstaLogo} style={styles.img} />
			</View>
			<View style={styles.button}>
				<InstaCloneIcons
					name='Message'
					size={24}
					color={theme.colors.secondary}
				/>
				<View style={styles.newMessage}></View>
			</View>
		</View>
	);
};
export default HomeHeader;

const currentHeight = StatusBar.currentHeight
	? StatusBar.currentHeight
	: 0;
const paddingTop = StatusBar.currentHeight
	? currentHeight + currentHeight / 2
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
	img: {
		width: 100,
		height: 30,
	},
	button: {
		height: '100%',
		alignItems: 'center',
	},
	newMessage: {
		borderRadius: 100,
		width: 12,
		height: 12,
		backgroundColor: theme.colors.accent,
		position: 'absolute',
		bottom: '15%',
		right: '-10%',
	},
});
