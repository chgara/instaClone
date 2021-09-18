import React from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import InstaCloneIcons from 'utils/icons';
import theme from 'utils/themes/theme';
import defaultScreens from 'utils/constants/defaultScreens';
import { routeName } from 'types/screen';
import StackParamList from 'types/ParamLists';

const Footer: React.FC = () => {
	const route = useRoute();
	const navigatior = useNavigation();
	const handlePress = (
		name: routeName<StackParamList>
	): (() => void) => {
		return () => navigatior.navigate(name);
	};
	return (
		<View style={styles.footer}>
			{defaultScreens.map((name, index) => (
				<Pressable
					key={`footer-${name}${index}`}
					onPress={handlePress(name)}
				>
					<InstaCloneIcons
						name={name === route.name ? `${name}1` : name}
						size={24}
						color={theme.colors.secondary}
					/>
				</Pressable>
			))}
		</View>
	);
};
export default Footer;

//TODO: add shadow in ios
const styles = StyleSheet.create({
	footer: {
		width: '100%',
		backgroundColor: theme.colors.primary,
		paddingVertical: '5%',
		paddingHorizontal: '2%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		position: 'absolute',
		bottom: 0,
		borderTopEndRadius: theme.border.rounded,
		borderTopStartRadius: theme.border.rounded,
		shadowColor: theme.colors.secondary,
		shadowOffset: {
			width: 0,
			height: -5,
		},
		shadowRadius: 5,
		shadowOpacity: 0.5,
		elevation: 20,
	},
});
