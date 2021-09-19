import React, { useState, useContext } from 'react';
import { StyleSheet, Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SeparatedInput from 'components/elements/Inputs/SeparatedInput';
import AuthContext from 'context/Auth';

const AuthBody: React.FC = () => {
	const navigation = useNavigation();
	const [phoneNumber, setPhoneNumber] = useState(
		new Array(9).fill(0)
	);
	/* const [countryCode, setCountryCode] = useState(''); */

	const onChangeText = (text: string): void => {
		setPhoneNumber(text.split(''));
	};
	const { dispatch } = useContext(AuthContext);
	return (
		<View style={styles.body}>
			<SeparatedInput
				value={phoneNumber}
				onChangeText={onChangeText}
			/>
			<Button
				title='Login'
				onPress={() =>
					dispatch({ type: 'logUser', userId: 1 })
				}
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
