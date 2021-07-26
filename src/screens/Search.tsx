import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StackScreenProps } from '@react-navigation/stack';
import StyledText from 'components/StyledText/StyledText';
import StackParamList from 'types/stackParamList';

const Search: React.FC<props> = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<StyledText bold dark>
				You are in the search page
			</StyledText>
			<Button
				title='Go to Home'
				onPress={() => navigation.navigate('Home')}
			/>
			<Button
				title='Go back'
				onPress={() => navigation.goBack()}
			/>
			<StatusBar style='auto' />
		</View>
	);
};
export default Search;

type props = StackScreenProps<StackParamList, 'Search'>;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
