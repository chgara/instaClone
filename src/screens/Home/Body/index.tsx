import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import data from 'data/posts';
import Post from 'components/Post';
import Histories from './Histories';
import theme from 'utils/themes/theme';

const Body: React.FC = () => {
	return (
		<View style={styles.body}>
			<FlatList
				data={data}
				style={{ flex: 1 }}
				ListHeaderComponent={<Histories />}
				keyExtractor={(item, index) =>
					`${index + Math.random() * Math.random() * 10}`
				}
				renderItem={({ item, index }) => {
					return <Post post={item} index={index} />;
				}}
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
