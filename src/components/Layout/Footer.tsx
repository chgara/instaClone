import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import {
	AntDesign,
	Ionicons,
	MaterialCommunityIcons,
} from '@expo/vector-icons';
import theme from 'utils/themes/theme';

const Footer: React.FC<props> = ({ imageSource }) => {
	return (
		<View style={styles.footer}>
			<Ionicons name='home-sharp' size={24} />
			<AntDesign name='search1' size={24} />
			<Ionicons name='film-outline' size={24} />
			<MaterialCommunityIcons
				name='shopping-outline'
				size={24}
			/>
			<Image
				style={styles.image}
				source={{
					uri: imageSource,
				}}
			/>
		</View>
	);
};
export default Footer;

interface props {
	imageSource: string;
}

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
