import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import theme from 'utils/themes/theme';
import AuthPaginationContext from 'context/Auth/authPaginationContext';

const options = [
	{ label: 'Login', value: 'login' },
	{ label: 'Register', value: 'register' },
];

const HeaderSwitch: React.FC = () => {
	const { state, dispatch } = useContext(AuthPaginationContext);
	const handlePress = (value: string) => {
		dispatch({
			type: value === 'login' ? 'goLogin' : 'goRegister',
		});
	};
	return (
		<View style={styles.headerSwitch}>
			<SwitchSelector
				options={options}
				initial={state === 'login' ? 0 : 1}
				selectedColor={theme.colors.primary}
				buttonColor={theme.colors.third}
				backgroundColor={theme.colors.fourth}
				hasPadding
				buttonMargin={5}
				valuePadding={1}
				borderRadius={theme.border.rounded}
				textColor={theme.colors.grey}
				onPress={handlePress}
			/>
		</View>
	);
};
export default HeaderSwitch;

const styles = StyleSheet.create({
	headerSwitch: {
		width: '100%',
		marginVertical: '5%',
	},
});
