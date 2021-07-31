import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import StackParamList from 'types/stackParamList';
import { StyleSheet, View } from 'react-native';
import StyledText from 'components/StyledText';

const Header: React.FC<props> = ({}) => {
	return (
		<View style={styles.header}>
			<StyledText bold white>
				Open up App.tsx to start working on your app!
			</StyledText>
		</View>
	);
};
export default Header;

type props = StackScreenProps<StackParamList, 'Home'>;
const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: '15%',
		backgroundColor: '#000',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
