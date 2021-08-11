import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Footer from 'components/Layout/Footer';
import theme from 'utils/themes/theme';

const Layout: React.FC<props> = ({ imageSource, children }) => {
	return (
		<View style={styles.container}>
			{children}
			<Footer imageSource={imageSource} />
			<StatusBar style='auto' />
		</View>
	);
};
export default Layout;

interface props {
	imageSource: string;
}
const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		backgroundColor: theme.colors.primary,
	},
});
