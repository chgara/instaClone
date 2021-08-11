import React from 'react';
import { Text, StyleProp } from 'react-native';
import styles from './StyledTextStyles';

const StyledText: React.FC<IStyledTextProps> = ({
	children,
	bold,
	light,
	small,
	big,
	dark,
	white,
	uppercase,
	style,
	numberOfLines,
}: IStyledTextProps) => {
	const textStyles: StyleProp<any>[] = [
		styles.text,
		bold && styles.bold,
		light && styles.light,
		small && styles.small,
		big && styles.big,
		dark && styles.dark,
		white && styles.white,
		uppercase && styles.uppercase,
		style,
	];

	const num = numberOfLines ? numberOfLines : 0;

	return (
		<Text style={textStyles} numberOfLines={num}>
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
	uppercase?: boolean;
	style?: StyleProp<any>;
	numberOfLines?: number;
}
