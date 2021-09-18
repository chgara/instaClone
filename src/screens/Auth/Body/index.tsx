import React, { useState } from 'react';
import { StyleSheet, Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SeparatedInput from 'components/elements/Inputs/SeparatedInput';

const AuthBody: React.FC = () => {
	const navigation = useNavigation();
	const [phoneNumber, setPhoneNumber] = useState(
		new Array(9).fill(0)
	);
	/* const [countryCode, setCountryCode] = useState(''); */

	const onChangeText = (text: string): void => {
		setPhoneNumber(text.split(''));
	};
	return (
		<View style={styles.body}>
			<SeparatedInput
				value={phoneNumber}
				onChangeText={onChangeText}
			/>
			<Button
				title='Go back'
				onPress={() => navigation.goBack()}
			/>
		</View>
	);
};
export default AuthBody;

const styles = StyleSheet.create({
	body: {
		width: '100%',
		backgroundColor: 'green',
		alignItems: 'center',
	},
});
