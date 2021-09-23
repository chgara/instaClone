import React, { ReactNode } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import RealSafeArea from 'components/Layout/RealSafeArea';
import theme from 'utils/themes/theme';

const InitialLayout: React.FC<props> = ({ children }) => {
	return (
		<RealSafeArea
			color={theme.colors.primary}
			style={styles.realContainer}
		>
			<View style={styles.container}>{children}</View>
			<StatusBar style='auto' />
		</RealSafeArea>
	);
};
export default InitialLayout;

interface props {
	children: ReactNode;
}

const styles = StyleSheet.create({
	realContainer: {
		display: 'flex',
		alignItems: 'center',
	},
	container: {
		flex: 1,
		width: '100%',
		backgroundColor: theme.colors.primary,
	},
});
