import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import data from 'data/posts';
import Post from 'components/Post';

const Body: React.FC<props> = ({ Header }) => {
	return (
		<View style={styles.body}>
			<FlatList
				data={data}
				style={styles.body}
				ListHeaderComponent={<Header />}
				keyExtractor={(item, index) =>
					`${index + Math.random() * Math.random() * 10}`
				}
				renderItem={({ item, index }) => <Post post={item} />}
			/>
		</View>
	);
};
export default Body;

interface props {
	Header: React.FC;
}

const styles = StyleSheet.create({
	body: {
		flex: 1,
		width: '100%',
	},
});
