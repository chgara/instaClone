import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import History from 'components/elements/Histories';
import CreateHistory from 'components/elements/Histories/CreateHistory';
import data from 'data';
import theme from 'utils/themes/theme';
import { width } from 'utils/constants/dimensions';

const renderItem = ({ item, index }: renderItemProps) => (
	<History
		name={item.fullName}
		imageSource={item.ownerAvatarUrl}
		bff={false}
	/>
);
const keyExtractor = (item, index) =>
	`${index + Math.random() * Math.random() * 10}`;

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
				keyExtractor={keyExtractor}
				renderItem={renderItem}
			/>
		</View>
	);
};
export default Histories;

const styles = StyleSheet.create({
	header: {
		height: width / 3.75,
		backgroundColor: theme.colors.primary,
	},
});
interface renderItemProps {
	item: historyObj;
	index: number;
}

interface historyObj {
	fullName: string;
	ownerAvatarUrl: string;
}
