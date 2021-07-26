import React from 'react';
import { Text, StyleProp, StyleSheetProperties } from 'react-native';
import styles from './StyledTextStyles';

const StyledText: React.FC<IStyledTextProps> = ({
	children,
	bold,
	light,
	small,
	big,
	dark,
	white,
	style,
}: IStyledTextProps) => {
	const textStyles: StyleProp<any>[] = [
		styles.text,
		bold && styles.bold,
		light && styles.light,
		small && styles.small,
		big && styles.big,
		dark && styles.dark,
		white && styles.white,
		style,
	];

	return (
		<Text style={textStyles} numberOfLines={0}>
			{children}
		</Text>
	);
};
export default StyledText;

interface IStyledTextProps {
	children: string;
	bold?: boolean;
	light?: boolean;
	small?: boolean;
	big?: boolean;
	dark?: boolean;
	white?: boolean;
	style?: StyleSheetProperties;
}
