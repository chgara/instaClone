import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import StackParamList from 'types/stackParamList';
import Layout from 'components/Layout';
import Header from './Header';
import Body from './Body';

const Home: React.FC<props> = props => (
	<Layout {...props}>
		<Header {...props} />
		<Body {...props} />
	</Layout>
);
export default Home;

type props = StackScreenProps<StackParamList, 'Home'>;
