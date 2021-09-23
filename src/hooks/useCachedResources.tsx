import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import { Asset } from 'expo-asset';
import { Image } from 'react-native';

export default function useCachedResources() {
	const [isLoadingComplete, setLoadingComplete] = React.useState(
		false
	);

	// Load any resources or data that we need prior to rendering the app
	React.useEffect(() => {
		async function loadResourcesAndDataAsync() {
			try {
				SplashScreen.preventAutoHideAsync();

				const images = [
					require('../../assets/images/instagramLogo.png'),
					require('../../assets/images/login.svg'),
				];
				const imageAssets = await cacheImages(images);

				// Load fonts
				await Font.loadAsync({
					'Poppins-regular': require('../../assets/fonts/Poppins-Regular.ttf'),
					'Poppins-light': require('../../assets/fonts/Poppins-Light.ttf'),
					'Poppins-bold': require('../../assets/fonts/Poppins-Bold.ttf'),
					'Poppins-medium': require('../../assets/fonts/Poppins-Medium.ttf'),
					InstaCloneIcons: require('../../assets/icons/fonts/instaCloneIcons.ttf'),
				});
			} catch (e) {
				// We might want to provide this error information to an error reporting service
				// TODO: implement real logger
				console.warn(e);
			} finally {
				setLoadingComplete(true);
				SplashScreen.hideAsync();
			}
		}

		loadResourcesAndDataAsync();
	}, []);

	return isLoadingComplete;
}
async function cacheImages(
	images: Array<string | number>
): Promise<(Promise<boolean> | Promise<Asset>)[]> {
	return images.map(image => {
		if (typeof image === 'string') {
			return Image.prefetch(image);
		} else {
			return Asset.fromModule(image).downloadAsync();
		}
	});
}
