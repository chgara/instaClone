import React from 'react';
import { StyleSheet, Platform, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-navigation';

const RealSafeArea: React.FC<Iprops> = props => {
	const styles = createstyles(props.color);
	return (
		<>
			<SafeAreaView
				forceInset={{ bottom: 'never' }}
				style={styles.AndroidSafeArea}
			>
				{props.children}
			</SafeAreaView>
		</>
	);
};
export default RealSafeArea;

interface Iprops {
	color: string;
	children: JSX.Element;
}
const createstyles = (color: string) => {
	return StyleSheet.create({
		AndroidSafeArea: {
			flex: 1,
			backgroundColor: color,
			paddingTop:
				Platform.OS === 'android'
					? StatusBar.currentHeight
					: 0,
		},
	});
};
