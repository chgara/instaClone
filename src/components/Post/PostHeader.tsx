import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import StyledText from 'components/StyledText';
import { width } from 'utils/constants/dimensions';
import theme from 'utils/themes/theme';

const PostHeader: React.FC<props> = ({ profilePic, profileName }) => {
	return (
		<View style={styles.header}>
			<Image
				style={styles.profilePic}
				source={{ uri: profilePic }}
			/>
			<StyledText bold style={styles.text}>
				{profileName}
			</StyledText>
			<View style={styles.share}>
				<View style={styles.shareIcon}></View>
				<View style={styles.shareIcon2}></View>
				<View style={styles.shareIcon2}></View>
			</View>
		</View>
	);
};
export default PostHeader;

interface props {
	profilePic: string;
	profileName: string;
}

const profilePic = width / 12;
const styles = StyleSheet.create({
	header: {
		position: 'absolute',
		top: '2%',
		zIndex: 100,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: '4%',
		paddingVertical: '2%',
	},
	profilePic: {
		width: profilePic,
		height: profilePic,
		borderRadius: 1000,
	},
	text: {
		flex: 1,
		marginLeft: '4%',
	},
	share: {
		width: profilePic * 1.5,
		height: profilePic,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	shareIcon: {
		backgroundColor: theme.colors.white,
		width: '45%',
		height: '15%',
		borderRadius: theme.border.rounded,
	},
	shareIcon2: {
		backgroundColor: theme.colors.transparentWhite,
		height: '10%',
		width: '15%',
		borderRadius: theme.border.rounded,
	},
});
