import React from 'react';
import { StyleSheet, View } from 'react-native';
import HeartSection from './HeartSection';
import CommentsSection from './CommentsSection';
import SendSection from './SendSection';
import SavedSection from './SavedSection';

const PostHeader: React.FC<props> = ({}) => {
	return (
		<View style={styles.header}>
			<View style={styles.left}>
				<HeartSection numLikes={78} isLiked />
				<CommentsSection numComments={9} />
				<SendSection />
			</View>
			<View style={styles.right}>
				<SavedSection isSaved={false} />
			</View>
		</View>
	);
};
export default PostHeader;

interface props {
	profilePic: string;
	profileName: string;
}

const styles = StyleSheet.create({
	header: {
		position: 'absolute',
		bottom: '6%',
		zIndex: 100,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: '4%',
		paddingVertical: '2%',
	},
	left: {
		flex: 1,
		height: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	right: {
		flex: 1,
		height: '100%',
		flexDirection: 'row',
		alignItems: 'center',
	},
});
