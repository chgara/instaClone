import React, { useState, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import SeparatedInput from 'components/elements/Inputs/SeparatedInput';
import AuthContext from 'context/Auth';
import Button from 'components/elements/Button';
import AuthPaginationContext from 'context/Auth/authPaginationContext';

const AuthBody: React.FC = () => {
	const [phoneNumber, setPhoneNumber] = useState(
		new Array(9).fill(0)
	);
	/* const [countryCode, setCountryCode] = useState(''); */

	const onChangeText = (text: string): void => {
		setPhoneNumber(text.split(''));
	};
	const { dispatch } = useContext(AuthContext);
	const { state } = useContext(AuthPaginationContext);
	return (
		<View style={styles.body}>
			<SeparatedInput
				value={phoneNumber}
				onChangeText={onChangeText}
			/>
			<Button
				content={state === 'login' ? 'Login' : 'Register'}
				style={styles.button}
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
		alignItems: 'center',
	},
	button: {
		marginTop: '10%',
	},
});
