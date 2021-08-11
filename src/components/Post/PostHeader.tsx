import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
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
			<StyledText bold dark style={styles.text}>
				{profileName}
			</StyledText>
			<AntDesign
				style={styles.icon}
				name='sharealt'
				size={24}
			/>
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
		backgroundColor: theme.colors.primary,
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
	icon: {
		/* position: 'absolute', */
		/* right: 0, */
	},
});
