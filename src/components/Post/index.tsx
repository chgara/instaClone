import React from 'react';
import { StyleSheet, View } from 'react-native';
import PostHeader from './PostHeader';
import PostBody from './PostBody';
import { Ipost } from 'types/profile';
import { height, width } from 'utils/constants/dimensions';
import theme from 'utils/themes/theme';

const postHeight = height / 1.75;
const Post: React.FC<props> = ({ post, index }) => {
	const styles = createStyles(index);
	return (
		<View style={[styles.post, styles.move]}>
			<PostHeader {...post} />
			<PostBody
				imageSrc={post.imageSrc}
				postHeight={postHeight}
			/>
		</View>
	);
};
export default Post;

interface props {
	post: Ipost;
	index: number;
}

const createStyles = (index: number) => {
	const styles = StyleSheet.create({
		post: {
			width: '100%',
			height: postHeight,
			borderTopStartRadius: theme.border.rounded,
			borderTopEndRadius: theme.border.rounded,
			overflow: 'hidden',
			backgroundColor: theme.colors.primary,
			shadowColor: 'white',
			shadowOffset: {
				width: 0,
				height: -20,
			},
			shadowRadius: 5,
			shadowOpacity: 1.0,
			elevation: 20,
		},
		move: {
			top: `-${index * 5}%`,
		},
	});
	return styles;
};
