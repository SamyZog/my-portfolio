import { createContext, useContext, useEffect, useState } from "react";

const themeContext = createContext();
const { Provider: Theme } = themeContext;

const Themeprovider = ({ children }) => {
	const [theme, setTheme] = useState("");

	const toggleTheme = () => {
		const chosenTheme = theme === "light" ? "dark" : "light";
		setTheme(chosenTheme);
		localStorage.setItem("sz_theme", chosenTheme);
		document.body.classList.remove(theme);
		document.body.classList.add(chosenTheme);
	};

	useEffect(() => {
		setTheme(localStorage.getItem("sz_theme"));
	}, []);

	const value = {
		theme,
		toggleTheme,
	};

	return <Theme value={value}>{children}</Theme>;
};

const useTheme = () => useContext(themeContext);

export { useTheme };
export default Themeprovider;
