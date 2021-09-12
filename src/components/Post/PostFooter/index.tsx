import React from 'react';
import { StyleSheet, View } from 'react-native';
import HeartSection from './HeartSection';
import CommentsSection from './CommentsSection';
import SendSection from './SendSection';
import SavedSection from './SavedSection';

const PostFooter: React.FC<props> = ({
	isSaved,
	isLiked,
	numLikes,
	numComments,
}) => {
	return (
		<View style={styles.header}>
			<View style={styles.left}>
				<HeartSection numLikes={numLikes} isLiked={isLiked} />
				<CommentsSection numComments={numComments} />
				<SendSection />
			</View>
			<View style={styles.right}>
				<SavedSection isSaved={isSaved} />
			</View>
		</View>
	);
};
export default PostFooter;

interface props {
	numLikes: number;
	numComments: number;
	isSaved: boolean;
	isLiked: boolean;
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
