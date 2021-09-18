import React from 'react';
import { StyleSheet, View } from 'react-native';
import HeaderSwitch from './HeaderSwitch';
import HeaderText from './HeaderText';

const AuthHeader: React.FC = () => {
	return (
		<View style={styles.header}>
			<HeaderText />
			<HeaderSwitch />
		</View>
	);
};
export default AuthHeader;

const styles = StyleSheet.create({
	header: {
		paddingTop: '5%',
		width: '100%',
	},
});
