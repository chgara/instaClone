import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StyledText from 'components/StyledText';
import Button from 'components/elements/Button';
import ImageSrc from 'assets/images/login.png';
import { width } from 'utils/constants/dimensions';

const InitialBody: React.FC = () => {
	const navigation = useNavigation();
	const handleLoginPress = () => {
		navigation.navigate('Auth');
	};
	const handleRegisterPress = () => {
		navigation.navigate('Auth');
		navigation.navigate('Auth', { register: true });
	};
	return (
		<View style={styles.body}>
			<Image source={ImageSrc} style={styles.img} />
			<View style={styles.footer}>
				<Button content='Login' onPress={handleLoginPress} />
				<Button
					content='Register'
					secondary
					style={styles.secondaryButton}
					onPress={handleRegisterPress}
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
		width: width,
		height: width,
		marginBottom: '15%',
	},
	footer: {
		flex: 0.5,
		alignSelf: 'center',
		width: '75%',
		alignItems: 'center',
		marginBottom: '1%',
	},
	secondaryButton: {
		marginTop: '10%',
	},
	terms: { paddingTop: '20%' },
});
