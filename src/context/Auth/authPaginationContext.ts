import { createContext } from 'react';

export const authPaginationReducer = (
	state: authPage,
	action: IauthPaginationContextAction
): authPage => {
	switch (action.type) {
		case 'goLogin': {
			return 'login';
		}
		case 'goRegister': {
			return 'register';
		}
		default: {
			//TODO: Implement online logger
			return 'login';
		}
	}
};

const defaulVal: IdefaulVal = {
	state: 'login',
	dispatch: () =>
		console.error(
			'Can not dispatch cause context is outside provider'
		),
};
const AuthPaginationContext = createContext(defaulVal);

interface IdefaulVal {
	state: authPage;
	dispatch: React.Dispatch<IauthPaginationContextAction>;
}
type authPage = 'register' | 'login';
interface IauthPaginationContextAction {
	type: 'goRegister' | 'goLogin';
}
export default AuthPaginationContext;
