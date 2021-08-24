import React from 'react';
import { Image, StyleSheet, View, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import StyledText from 'components/StyledText';
import theme from 'utils/themes/theme';
import { width } from 'utils/constants/dimensions';

//TODO: add styles border
const CreateHistory: React.FC<props> = ({ imageSource }) => {
	return (
		<View style={styles.history}>
			<View style={styles.border}>
				<Image
					style={styles.image}
					source={{
						uri: imageSource,
					}}
				/>
				<View style={styles.logoContainer}>
					<AntDesign
						name='pluscircle'
						style={styles.plus}
						size={22}
						color={theme.colors.primary}
					/>
				</View>
			</View>
			<StyledText
				numberOfLines={1}
				small
				bold
				style={styles.text}
			>
				Your history
			</StyledText>
		</View>
	);
};
export default CreateHistory;

interface props {
	imageSource: string;
}

const imageSize = width / 6.5;
const borderSize = width / 5.5;
const styles = StyleSheet.create({
	history: {
		width: borderSize,
		height: '100%',
		marginLeft: borderSize / 4,
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	border: {
		width: borderSize,
		height: borderSize,
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: theme.colors.secondary,
		borderWidth: 2,
		borderRadius: 1000,
	},
	logoContainer: {
		position: 'absolute',
		bottom: -borderSize / 20,
		right: -borderSize / 20,
		backgroundColor: theme.colors.secondary,
		borderRadius: 1000,
		borderColor: theme.colors.secondary,
		borderWidth: 2,
	},
	plus: {},
	image: {
		width: imageSize,
		height: imageSize,
		borderRadius: 1000,
		borderWidth: 0.5,
		borderColor: theme.colors.grey,
	},
	text: {
		marginTop: '5%',
	},
});
