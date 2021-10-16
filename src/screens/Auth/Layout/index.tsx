import React, { ReactNode, useReducer } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import RealSafeArea from 'components/Layout/RealSafeArea';
import theme from 'utils/themes/theme';
import AuthPaginationContext, {
	authPaginationReducer,
} from 'context/Auth/authPaginationContext';

const AuthLayout: React.FC<props> = ({ register, children }) => {
	const page = register ? 'register' : 'login';
	const [state, dispatch] = useReducer(authPaginationReducer, page);
	const value = { state, dispatch };
	return (
		<AuthPaginationContext.Provider value={value}>
			<RealSafeArea color={theme.colors.primary}>
				<KeyboardAvoidingView style={styles.keyboardView}>
					<View style={styles.container}>{children}</View>
				</KeyboardAvoidingView>
				<StatusBar style='auto' />
			</RealSafeArea>
		</AuthPaginationContext.Provider>
	);
};
export default AuthLayout;

interface props {
	children: ReactNode;
	register?: boolean;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '90%',
		backgroundColor: theme.colors.primary,
	},
	keyboardView: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
