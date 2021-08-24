import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import History from 'components/elements/Histories';
import CreateHistory from 'components/elements/Histories/CreateHistory';
import data from 'data';
import theme from 'utils/themes/theme';
import { width } from 'utils/constants/dimensions';

//TODO: Implement react skeleton when loading data
const Histories: React.FC = () => {
	return (
		<View style={styles.header}>
			<FlatList
				data={data}
				style={{ flex: 1 }}
				horizontal
				showsHorizontalScrollIndicator={false}
				ListHeaderComponent={
					<CreateHistory
						imageSource={data[1].ownerAvatarUrl}
					/>
				}
				keyExtractor={(item, index) =>
					`${index + Math.random() * Math.random() * 10}`
				}
				renderItem={({ item, index }) => (
					<History
						name={item.fullName}
						imageSource={item.ownerAvatarUrl}
						bff={false}
					/>
				)}
			/>
		</View>
	);
};
export default Histories;

const styles = StyleSheet.create({
	container: {},
	header: {
		height: width / 3.75,
		backgroundColor: theme.colors.primary,
		zIndex: 111,
	},
});
