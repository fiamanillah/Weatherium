import { useContext } from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // You can use other icons or SVGs

import ThemeContext from "../contexts/ThemeContext";

function ThemeToggle() {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<div>
			<button onClick={toggleTheme} className=" bg-lightCard dark:bg-darkCard p-2 rounded-full text-2xl">
				{theme === "light" ? (
					<FaSun className="text-yellow-500" /> // Sun icon for dark mode
				) : (
					<FaMoon className="text-gray-300" /> // Moon icon for light mode
				)}
			</button>
		</div>
	);
}

export default ThemeToggle;
