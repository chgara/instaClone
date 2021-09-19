import React, { useReducer } from 'react';
import { registerRootComponent } from 'expo';
import useCachedResources from 'hooks/useCachedResources';
import Navigation from 'navigation';
import AuthContext, { authReducer } from 'context/Auth';

function Main() {
	const [state, dispatch] = useReducer(authReducer, {
		isAuthed: true,
	});
	const value = { state, dispatch };
	return (
		<AuthContext.Provider value={value}>
			<Navigation />
		</AuthContext.Provider>
	);
}
export default function App() {
	const isLoaded = useCachedResources();

	if (!isLoaded) return null;
	return <Main />;
}

registerRootComponent(App);
