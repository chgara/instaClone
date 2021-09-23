import StyledText from 'components/StyledText';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import theme from 'utils/themes/theme';

const InitialHeader: React.FC = () => {
	return (
		<View style={styles.header}>
			<View style={styles.mainText}>
				<StyledText bigger dark bold>
					Your home.
				</StyledText>
				<StyledText
					bigger
					dark
					bolder
					style={styles.primText}
				>
					{` InstaClone.`}
				</StyledText>
			</View>
			<StyledText big>Enjoy the experience.</StyledText>
		</View>
	);
};
export default InitialHeader;

const styles = StyleSheet.create({
	header: {
		paddingTop: '10%',
		width: '100%',
		alignItems: 'center',
	},
	mainText: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	primText: {
		color: theme.colors.third,
	},
});
