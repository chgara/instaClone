import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StackScreenProps } from '@react-navigation/stack';
import StackParamList from 'types/stackParamList';
import Footer from 'components/Layout/Footer';

const Layout: React.FC<props> = props => {
	return (
		<View style={styles.container}>
			{props.children}
			<Footer {...props} />
			<StatusBar style='auto' />
		</View>
	);
};
export default Layout;

type props = StackScreenProps<StackParamList, 'Home'>;
const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		backgroundColor: 'red',
	},
});
