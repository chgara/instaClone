import React from 'react';
import { registerRootComponent } from 'expo';
import useCachedResources from 'hooks/useCachedResources';
import Navigation from 'navigation';

export default function Main() {
	const isLoaded = useCachedResources();

	if (!isLoaded) return null;

	return <Navigation />;
}

registerRootComponent(Main);
