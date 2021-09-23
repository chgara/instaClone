import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthParamList } from 'types/ParamLists';
import InitialLayout from './Layout';
import InitialHeader from './Header';
import InitialBody from './Body';

const Initial: React.FC<props> = ({}) => {
	return (
		<InitialLayout>
			<InitialHeader />
			<InitialBody />
		</InitialLayout>
	);
};
export default Initial;

type props = StackScreenProps<AuthParamList, 'Initial'>;
