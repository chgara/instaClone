import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import StyledText from 'components/StyledText';
import theme from 'utils/themes/theme';

const SeparatedInput: React.FC<props> = ({ value, onChangeText }) => {
	return (
		<View style={styles.container}>
			<TextInput
				keyboardType='phone-pad'
				value={value.join('')}
				onChangeText={onChangeText}
				placeholder='000000'
			/>
			<View style={styles.input}>
				{value.map((val, index) => {
					return (
						<View style={styles.inputItem} key={index}>
							<StyledText>{val}</StyledText>
						</View>
					);
				})}
			</View>
		</View>
	);
};
export default SeparatedInput;

interface props {
	value: Array<string>;
	onChangeText: (text: string) => void;
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		backgroundColor: 'blue',
		alignItems: 'center',
		justifyContent: 'center',
	},
	input: {
		width: '100%',
		flexDirection: 'row',
		borderColor: 'black',
	},
	inputItem: {
		flex: 1,
		backgroundColor: 'red',
		borderColor: 'black',
		borderWidth: 2,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
