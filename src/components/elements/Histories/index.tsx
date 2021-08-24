import React from 'react';
import { Image, StyleSheet, View, Dimensions } from 'react-native';
import StyledText from 'components/StyledText';
import theme from 'utils/themes/theme';
import { width } from 'utils/constants/dimensions';

const History: React.FC<props> = ({ imageSource, name, bff }) => {
	return (
		<View style={styles.history}>
			<View style={styles.border}>
				<Image
					style={styles.image}
					source={{
						uri: imageSource,
					}}
				/>
			</View>
			<StyledText
				numberOfLines={1}
				small
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

const imageSize = width / 6.5;
const borderSize = width / 5.5;
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
		borderColor: 'red',
		borderWidth: 2,
		borderRadius: 1000,
	},
	image: {
		width: imageSize,
		height: imageSize,
		borderRadius: 1000,
		borderWidth: 1,
		borderColor: theme.colors.grey,
	},
	text: {
		marginTop: '5%',
	},
});
