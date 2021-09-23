import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MemoLoginSVG from './Image';
import StyledText from 'components/StyledText';
import Button from 'components/elements/Button';

const InitialBody: React.FC = () => {
	const navigation = useNavigation();
	const handlePress = () => {
		navigation.navigate('Auth');
	};
	return (
		<View style={styles.body}>
			<View style={styles.img}>
				<MemoLoginSVG />
			</View>
			<View style={styles.footer}>
				<Button content='Login' handlePress={handlePress} />
				<Button
					content='Register'
					secondary
					style={styles.secondaryButton}
					handlePress={handlePress}
				/>
				<StyledText style={styles.terms} small>
					Terms of service
				</StyledText>
			</View>
		</View>
	);
};
export default InitialBody;

const styles = StyleSheet.create({
	body: {
		flex: 1,
	},
	img: {
		flex: 1,
	},
	footer: {
		flex: 0.5,
		alignSelf: 'center',
		width: '70%',
		alignItems: 'center',
		marginBottom: '1%',
	},
	secondaryButton: {
		marginTop: '10%',
	},
	terms: {
		position: 'absolute',
		bottom: '15%',
	},
});
