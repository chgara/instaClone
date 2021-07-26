import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StackScreenProps } from '@react-navigation/stack';
import StyledText from 'components/StyledText/StyledText';
import StackParamList from 'types/stackParamList';

const Profile: React.FC<props> = ({ navigation, route }) => {
	const { userId } = route.params;
	return (
		<View style={styles.container}>
			<StyledText bold dark>
				You are in the profile page
			</StyledText>
			<StyledText bold dark big>
				{JSON.stringify(userId)}
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
export default Profile;

type props = StackScreenProps<StackParamList, 'Profile'>;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
