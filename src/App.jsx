import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ThemeProvider } from "./contexts/ThemeContext";
import WeatherContextProvider from "./contexts/WeatherContextProvider";
import MainSection from "./layout/MainSection";

function App() {
	return (
		<ThemeProvider>
			<WeatherContextProvider>
				<div className="prose max-w-none bg-background dark:bg-darkBackground laptop-xl:px-2">
					<div className="max-w-screen-2xl mx-auto">
						<Header />
						<MainSection />
						<Footer />
					</div>
				</div>
			</WeatherContextProvider>
		</ThemeProvider>
	);
}

export default App;
