import React from 'react';
import { StyleSheet, View } from 'react-native';
import PostHeader from './PostHeader';
import PostBody from './PostBody';
import PostFooter from './PostFooter';
import { Ipost } from 'types/profile';
import { height, width } from 'utils/constants/dimensions';
import theme from 'utils/themes/theme';

export const postHeight = height / 1.75;
export const postWidth = width;

const Post: React.FC<props> = ({ post, index }) => {
	const measures = { postWidth, postHeight };
	return (
		<View style={[styles.post, { top: `-${index * 5}%` }]}>
			<PostHeader
				profilePic={post.profilePic}
				profileName={post.profileName}
			/>
			<PostBody
				imageSrc={post.imageSrc}
				postMeasurements={measures}
			/>
			<PostFooter
				numLikes={78}
				numComments={9}
				isSaved={true}
				isLiked
			/>
		</View>
	);
};
export default Post;

interface props {
	post: Ipost;
	index: number;
}

const styles = StyleSheet.create({
	post: {
		width: postWidth,
		height: postHeight,
		borderTopStartRadius: theme.border.rounded,
		borderTopEndRadius: theme.border.rounded,
		overflow: 'hidden',
		backgroundColor: theme.colors.secondary,
		//TODO:SHADOW IN IOS
		shadowColor: theme.colors.secondary,
		shadowOffset: {
			width: 0,
			height: -20,
		},
		shadowRadius: 5,
		shadowOpacity: 1.0,
		elevation: 20,
	},
});
