import React from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import StyledText from 'components/StyledText';
import InstaCloneIcons from 'utils/icons';
import theme from 'utils/themes/theme';

const CommentsSection: React.FC<props> = ({ numComments }) => {
	return (
		<Pressable style={styles.comments}>
			<InstaCloneIcons
				name={'Chat1'}
				size={theme.icons.normal}
				color={theme.colors.primary}
			/>
			<StyledText
				style={styles.txt}
				white
				small
			>{`${numComments}k`}</StyledText>
		</Pressable>
	);
};
export default CommentsSection;

interface props {
	numComments: number;
}

const styles = StyleSheet.create({
	comments: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: '4%',
		paddingHorizontal: '5%',
		elevation: 20,
	},
	txt: {
		paddingLeft: '4%',
		elevation: 50,
	},
	shadow: {},
});
