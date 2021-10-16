import React from 'react';
import {
	StyleProp,
	StyleSheet,
	TouchableHighlight,
	View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StyledText from 'components/StyledText';
import theme from 'utils/themes/theme';

const Button: React.FC<props> = ({
	onPress,
	content,
	secondary,
	style,
}) => {
	if (secondary) {
		return (
			<View
				style={[styles.button, styles.secondaryButton, style]}
			>
				<TouchableHighlight
					onPress={onPress}
					style={styles.touchable}
				>
					<StyledText dark>{content}</StyledText>
				</TouchableHighlight>
			</View>
		);
	}
	return (
		<View style={styles.preButton}>
			<LinearGradient
				colors={[...theme.colors.mainGradient]}
				style={[styles.button, style]}
			>
				<TouchableHighlight
					onPress={onPress}
					style={styles.touchable}
				>
					<StyledText white>{content}</StyledText>
				</TouchableHighlight>
			</LinearGradient>
		</View>
	);
};
export default Button;

interface props {
	onPress: () => void;
	secondary?: boolean;
	content: string;
	style?: StyleProp<any>;
}

const styles = StyleSheet.create({
	button: {
		width: '100%',
		borderRadius: theme.border.roundedMin,
		paddingVertical: 10,
		elevation: theme.elevation.normal,
	},
	secondaryButton: {
		backgroundColor: theme.colors.primary,
	},
	touchable: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	preButton: {
		width: '100%',
	},
});
