import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import InstaCloneIcons from 'utils/icons';
import theme from 'utils/themes/theme';

const SendSection: React.FC = () => {
	return (
		<Pressable style={styles.send}>
			<InstaCloneIcons
				name={'Send1'}
				size={theme.icons.normal}
				color={theme.colors.primary}
			/>
		</Pressable>
	);
};
export default SendSection;

const styles = StyleSheet.create({
	send: {},
});
