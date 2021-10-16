import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthParamList } from 'types/ParamLists';
import AuthLayout from './Layout';
import AuthHeader from './Header';
import AuthBody from './Body';

const Auth: React.FC<props> = ({ route }) => {
	const { params } = route;
	return (
		<AuthLayout register={params?.register}>
			<AuthHeader />
			<AuthBody />
		</AuthLayout>
	);
};
export default Auth;

type props = StackScreenProps<AuthParamList, 'Auth'>;
