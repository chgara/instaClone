import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Footer from 'components/Layout/Footer';
import theme from 'utils/themes/theme';

const Layout: React.FC = ({ children }) => {
	return (
		<View style={styles.container}>
			{children}
			<Footer />
			<StatusBar style='auto' />
		</View>
	);
};
export default Layout;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		backgroundColor: theme.colors.primary,
	},
});
