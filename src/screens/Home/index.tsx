import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import StackParamList from 'types/stackParamList';
import Layout from 'components/Layout';
import Header from './Header';
import Body from './Body';

const Home: React.FC<props> = props => (
	<Layout imageSource='https://avatars.githubusercontent.com/u/1516955?v=4'>
		<Body Header={Header} />
	</Layout>
);
export default Home;

type props = StackScreenProps<StackParamList, 'Home'>;
