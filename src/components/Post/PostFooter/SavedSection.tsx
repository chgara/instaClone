import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import InstaCloneIcons from 'utils/icons';
import theme from 'utils/themes/theme';

const SavedSection: React.FC<props> = ({ isSaved }) => {
	return (
		<Pressable style={styles.save}>
			<InstaCloneIcons
				name={isSaved ? 'Bookmark1' : 'Bookmark'}
				size={theme.icons.normal}
				color={theme.colors.primary}
			/>
		</Pressable>
	);
};
export default SavedSection;

interface props {
	isSaved: boolean;
}

const styles = StyleSheet.create({
	save: {
		position: 'absolute',
		right: 0,
	},
});
