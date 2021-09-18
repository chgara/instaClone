import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

export default function useCachedResources() {
	const [isLoadingComplete, setLoadingComplete] = React.useState(
		false
	);

	// Load any resources or data that we need prior to rendering the app
	React.useEffect(() => {
		async function loadResourcesAndDataAsync() {
			try {
				SplashScreen.preventAutoHideAsync();

				// Load fonts
				await Font.loadAsync({
					'Poppins-regular': require('../../assets/fonts/Poppins-Regular.ttf'),
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
