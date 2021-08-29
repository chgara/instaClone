import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { BlurView } from 'expo-blur';
import StyledText from 'components/StyledText';
import InstaCloneIcons from 'utils/icons';
import theme from 'utils/themes/theme';

const HeartSection: React.FC<props> = ({ numLikes, isLiked }) => {
	return (
		<BlurView style={styles.heartBack}>
			<InstaCloneIcons
				name={isLiked ? 'Heart1' : 'Heart'}
				size={theme.icons.normal}
				color={theme.colors.primary}
			/>
			<StyledText
				style={styles.txt}
				white
				small
			>{`${numLikes}k`}</StyledText>
		</BlurView>
	);
};
export default HeartSection;

interface props {
	numLikes: number;
	isLiked: boolean;
}

const styles = StyleSheet.create({
	heartBack: {
		backgroundColor: 'red',
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: '4%',
		paddingHorizontal: '5%',
		borderRadius: theme.border.rounded,
	},
	txt: {
		paddingLeft: '4%',
	},
});
