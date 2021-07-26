import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StackScreenProps } from '@react-navigation/stack';
import StyledText from 'components/StyledText/StyledText';
import StackParamList from 'types/stackParamList';

const Home: React.FC<props> = ({ navigation }) => {
	return (
		<View style={styles.container}>
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
			<StatusBar style='auto' />
		</View>
	);
};
export default Home;

type props = StackScreenProps<StackParamList, 'Home'>;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
