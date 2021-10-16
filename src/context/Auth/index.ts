import { createContext } from 'react';

export const authReducer = (
	state: IauthContext,
	action: IauthContextAction
): IauthContext => {
	switch (action.type) {
		case 'logUser': {
			return { isAuthed: true, userId: action.userId };
		}
		case 'logoutUser': {
			return { isAuthed: false, userId: undefined };
		}
		default: {
			//TODO: Implement here
			return { isAuthed: false, userId: undefined };
		}
	}
};
const defaulVal: IdefaulVal = {
	state: { isAuthed: false },
	dispatch: () =>
		console.error(
			'Can not dispatch caouse context is outside provider'
		),
};
const AuthContext = createContext(defaulVal);

interface IdefaulVal {
	state: IauthContext;
	dispatch: React.Dispatch<IauthContextAction>;
}
interface IauthContext {
	isAuthed: boolean;
	userId?: number;
}
interface IauthContextAction {
	type: 'logUser' | 'logoutUser';
	userId: number;
}
export default AuthContext;
