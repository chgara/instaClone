import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StackScreenProps } from '@react-navigation/stack';
import StyledText from 'components/StyledText';
import StackParamList from 'types/ParamLists';
import Layout from 'components/Layout';

const Profile: React.FC<props> = ({ navigation }) => {
	return (
		<Layout>
			<View style={styles.container}>
				<StyledText bold dark>
					You are in your profile page
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
		</Layout>
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
