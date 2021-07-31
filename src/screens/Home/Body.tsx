import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import StyledText from 'components/StyledText';
import StackParamList from 'types/stackParamList';

const Body: React.FC<props> = props => {
	const { navigation } = props;
	return (
		<View style={styles.body}>
			<StyledText bold dark>
				Open up App.tsx to start working on your app!
			</StyledText>
			<Button
				title='Go to search'
				onPress={() => navigation.navigate('Search')}
			/>
			<Button
				title='Go to Profile'
				onPress={() =>
					navigation.navigate({
						name: 'Profile',
						params: { userId: 20 },
					})
				}
			/>
		</View>
	);
};
export default Body;

type props = StackScreenProps<StackParamList, 'Home'>;
const styles = StyleSheet.create({
	body: {
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
