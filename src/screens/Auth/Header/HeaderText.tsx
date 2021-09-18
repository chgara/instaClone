import React, { useContext } from 'react';
import StyledText from 'components/StyledText';
import AuthPaginationContext from 'context/Auth/authPaginationContext';

const HeaderText: React.FC = () => {
	const { state } = useContext(AuthPaginationContext);
	const isInLogin = state === 'login';
	return (
		<>
			<StyledText bold dark big>
				{isInLogin ? 'Login Account' : 'Register Account'}
			</StyledText>
			<StyledText small>
				{isInLogin
					? 'Hello welcome back to your account'
					: 'Hello, create your new account'}
			</StyledText>
		</>
	);
};
export default HeaderText;
