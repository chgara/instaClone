import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import data from 'data/posts';
import Post, { postHeight } from 'components/Post';
import Histories from './Histories';
import { Ipost } from 'types/profile';
import theme from 'utils/themes/theme';

const renderItem = ({ item, index }: renderItemProps) => (
	<Post post={item} index={index} />
);

const keyExtractor = (item: Ipost, index: number) =>
	`${index + Math.random() * Math.random() * 10}`;

const getItemLayout = (
	data: Ipost[] | null | undefined,
	index: number
) => ({
	length: postHeight,
	offset: postHeight,
	index,
});

const Body: React.FC = () => {
	return (
		<View style={styles.body}>
			<FlatList
				data={data}
				style={{ flex: 1 }}
				ListHeaderComponent={<Histories />}
				getItemLayout={getItemLayout}
				keyExtractor={keyExtractor}
				renderItem={renderItem}
			/>
		</View>
	);
};
export default Body;

const styles = StyleSheet.create({
	body: {
		flex: 1,
		width: '100%',
		overflow: 'hidden',
		borderTopEndRadius: theme.border.rounded,
		borderTopStartRadius: theme.border.rounded,
	},
});

interface renderItemProps {
	item: Ipost;
	index: number;
}
