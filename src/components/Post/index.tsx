import React from 'react';
import { StyleSheet, View } from 'react-native';
import PostHeader from './PostHeader';
import PostBody from './PostBody';
import { Ipost } from 'types/profile';
import { height, width } from 'utils/constants/dimensions';

const postHeight = height / 2;
const Post: React.FC<props> = ({ post }) => {
	return (
		<View style={styles.post}>
			<PostHeader {...post} />
			<PostBody imageSrc={post.imageSrc} />
		</View>
	);
};
export default Post;

interface props {
	post: Ipost;
}

const styles = StyleSheet.create({
	post: {
		width: '100%',
		height: postHeight,
		backgroundColor: 'red',
		borderColor: 'white',
		borderTopWidth: 3,
	},
});
