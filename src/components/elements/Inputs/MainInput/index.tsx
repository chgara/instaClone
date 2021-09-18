import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

const MainInput: React.FC<props> = ({ value, onChangeText }) => {
	return (
		<View style={styles.container}>
			<TextInput
				keyboardType='numeric'
				value={value}
				onChangeText={onChangeText}
				placeholder='000-000-000'
			/>
		</View>
	);
};
export default MainInput;

interface props {
	value: string;
	onChangeText: (text: string) => void;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
