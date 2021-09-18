import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import StackParamList from 'types/ParamLists';
import Layout from 'components/Layout';
import Body from './Body';
import HomeHeader from './Header';

const Home: React.FC<props> = props => (
	<Layout>
		<HomeHeader />
		<Body />
	</Layout>
);
export default Home;

type props = StackScreenProps<StackParamList, 'Home'>;
