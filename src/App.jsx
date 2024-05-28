import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { ThemeProvider } from "./contexts/theme";

const App = () => {
	const [themeMode, setThemeMode] = useState("light");

	const lightTheme = () => {
		setThemeMode("light");
	};

	const darkTheme = () => {
		setThemeMode("dark");
	};

	useEffect(() => {
		// Manipulate HTML class based on themeMode
		document.querySelector("html").classList.remove("light", "dark");
		document.querySelector("html").classList.add(themeMode);
	}, [themeMode]);

	return (
		<ThemeProvider value={{ lightTheme, darkTheme, themeMode }}>
			<Outlet />
		</ThemeProvider>
	);
};

export default App;
