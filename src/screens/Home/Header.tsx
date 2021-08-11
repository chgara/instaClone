import React from 'react';
import { StyleSheet, Dimensions, FlatList } from 'react-native';
import History from 'components/elements/Histories';
import CreateHistory from 'components/elements/Histories/CreateHistory';
import data from 'data';
import theme from 'utils/themes/theme';
import { width } from 'utils/constants/dimensions';

//TODO: Implement react skeleton when loading data
const Header: React.FC = () => {
	return (
		<FlatList
			data={data}
			style={styles.header}
			horizontal
			showsHorizontalScrollIndicator={false}
			ListHeaderComponent={
				<CreateHistory imageSource={data[1].ownerAvatarUrl} />
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
	);
};
export default Header;

const styles = StyleSheet.create({
	container: {},
	header: {
		flex: 1,
		maxHeight: width / 4,
		borderBottomColor: theme.colors.grey,
		borderBottomWidth: 0.5,
		backgroundColor: theme.colors.primary,
	},
});
