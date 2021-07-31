import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import StyledText from 'components/StyledText';
import theme from 'themes/theme';
import { StackHeaderProps } from '@react-navigation/stack';

const HomeHeader: React.FC<props> = ({}) => {
	return (
		<View style={styles.header}>
			<StyledText style={styles.logo} bold uppercase>
				Instagram
			</StyledText>
			<View style={styles.button}>
				<AntDesign name='plussquareo' size={24} />
				<AntDesign name='hearto' size={24} />
				<FontAwesome5 name='paper-plane' size={24} />
			</View>
		</View>
	);
};
export default HomeHeader;

type props = StackHeaderProps;

const styles = StyleSheet.create({
	header: {
		width: '100%',
		backgroundColor: theme.colors.primary,
		paddingTop: StatusBar.currentHeight,
		paddingBottom: '5%',
		paddingHorizontal: '2%',
		flexDirection: 'row',
		alignItems: 'center',
	},
	logo: {
		flex: 4,
	},
	button: {
		flex: 2,
		height: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});
