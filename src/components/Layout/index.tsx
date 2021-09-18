import React from 'react';
import { StatusBar } from 'expo-status-bar';
import RealSafeArea from './RealSafeArea';
import Footer from 'components/Layout/Footer';
import theme from 'utils/themes/theme';

const Layout: React.FC = ({ children }) => {
	return (
		<RealSafeArea color={theme.colors.primary}>
			{children}
			<Footer />
			<StatusBar style='auto' />
		</RealSafeArea>
	);
};
export default Layout;
