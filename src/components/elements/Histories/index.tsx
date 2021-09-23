import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StyledText from 'components/StyledText';
import theme from 'utils/themes/theme';
import { borderSize, imageSize } from 'utils/constants/dimensions';

const History: React.FC<props> = ({ imageSource, name, bff }) => {
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
			</LinearGradient>
			<StyledText
				numberOfLines={1}
				smaller
				dark
				bold
				style={styles.text}
			>
				{name}
			</StyledText>
		</View>
	);
};
export default History;

interface props {
	imageSource: string;
	name: string;
	bff: boolean;
}

const styles = StyleSheet.create({
	history: {
		width: borderSize,
		height: '100%',
		marginLeft: borderSize / 5,
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	border: {
		width: borderSize,
		height: borderSize,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: theme.border.roundedMain,
	},
	image: {
		width: imageSize,
		height: imageSize,
		borderRadius: theme.border.roundedMain,
		borderWidth: 3,
		borderColor: theme.colors.white,
	},
	text: {
		marginTop: '5%',
		fontSize: 10,
	},
});
