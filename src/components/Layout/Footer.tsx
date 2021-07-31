import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack';
import theme from 'themes/theme';
import StackParamList from 'types/stackParamList';

const Footer: React.FC<props> = ({}) => {
	return (
		<View style={styles.footer}>
			<Ionicons name='home-sharp' size={24} />
			<AntDesign name='find' size={24} />
			<Ionicons name='film-outline' size={24} />
			<AntDesign name='shoppingcart' size={24} />
			<Image
				style={styles.image}
				source={{
					uri:
						'https://avatars.githubusercontent.com/u/1516955?v=4',
				}}
			/>
		</View>
	);
};
export default Footer;

type props = StackScreenProps<StackParamList, 'Home'>;

const styles = StyleSheet.create({
	footer: {
		width: '100%',
		backgroundColor: theme.colors.primary,
		paddingVertical: '3%',
		paddingHorizontal: '2%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		position: 'absolute',
		bottom: 0,
	},
	image: {
		width: 24,
		height: 24,
		borderWidth: 0.5,
		borderColor: theme.colors.secondary,
		borderRadius: 1000,
	},
});
