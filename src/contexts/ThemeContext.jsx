import { createContext, useState, useEffect } from "react";

// Create a Context
const ThemeContext = createContext();

// Theme Provider component
export function ThemeProvider({ children }) {
	// Determine initial theme based on system preference or saved preference
	const getInitialTheme = () => {
		// Check localStorage first
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) return savedTheme;

		// If no theme is saved, check system preference
		const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
		return prefersDark ? "dark" : "light";
	};

	const [theme, setTheme] = useState(getInitialTheme);

	useEffect(() => {
		// Apply the theme to the document when it changes
		document.documentElement.classList.toggle("dark", theme === "dark");
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
	};

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export default ThemeContext;
