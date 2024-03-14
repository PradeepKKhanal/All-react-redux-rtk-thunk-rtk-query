import Card from "./components/Card";
import Button from "./components/Button";
import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/theme";

function App() {
	const [themeMode, setThemeMode] = useState("light");

	const lightTheme = () => {
		setThemeMode("light");
	};

	const darkTheme = () => {
		setThemeMode("dark");
	};

	useEffect(() => {
		document.querySelector("html").classList.remove("light", "dark");
		document.querySelector("html").classList.add(themeMode);
	}, [themeMode]);

	return (
		<>
			<ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
				<Button></Button>
				<Card></Card>
			</ThemeProvider>
		</>
	);
}

export default App;
