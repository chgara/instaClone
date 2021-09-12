import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import StyledText from 'components/StyledText';
import theme from 'utils/themes/theme';
import { width } from 'utils/constants/dimensions';

//TODO: add styles border
const CreateHistory: React.FC<props> = ({ imageSource }) => {
	return (
		<View style={styles.history}>
			<LinearGradient
				colors={[...theme.colors.mainGradient]}
				style={styles.border}
			>
				<Image
					style={styles.image}
					source={{
						uri: imageSource,
					}}
				/>
				<LinearGradient
					colors={[...theme.colors.mainGradient]}
					style={styles.logoContainer}
				>
					<AntDesign
						name='pluscircle'
						style={styles.plus}
						size={22}
						color={theme.colors.primary}
					/>
				</LinearGradient>
			</LinearGradient>
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

const imageSize = width / 5.8;
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
		borderRadius: 100,
	},
	logoContainer: {
		position: 'absolute',
		bottom: -borderSize / 20,
		right: -borderSize / 20,
		borderRadius: 100,
		padding: 2,
	},
	plus: {},
	image: {
		width: imageSize,
		height: imageSize,
		borderRadius: 1000,
		borderWidth: 2,
		borderColor: theme.colors.white,
	},
	text: {
		marginTop: '5%',
	},
});
