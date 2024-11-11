import { useEffect, useState } from "react";
import WeatherContext from "./WeatherContext";

function WeatherContextProvider({ children }) {
	const [weatherSearchResult, setWeatherSearchResult] = useState();
	const [airPollutionResult, setAirPollutionResult] = useState("");
	const [cityInfo, setCityInfo] = useState();
	const [celOrFar, setCelOrFar] = useState("metric");
	const [cityName, setCityName] = useState("");
	const [overview, setOverview] = useState("");
	const apiKey = import.meta.env.VITE_API_KEY;

	function toggleCelFar() {
		if (celOrFar === "metric") {
			setCelOrFar("imperial");
		} else if (celOrFar === "imperial") {
			setCelOrFar("metric");
		}
	}

	useEffect(() => {
		// Check if cityInfo is defined and has lat/lon before making the API call
		if (cityInfo && cityInfo.lat && cityInfo.lon) {
			async function fetchWeatherData() {
				const weatherResponse = await fetch(
					`https://api.openweathermap.org/data/3.0/onecall?lat=${cityInfo.lat}&lon=${cityInfo.lon}&units=${celOrFar}&appid=${apiKey}`
				);

				if (!weatherResponse.ok) {
					throw new Error("Failed to fetch data");
				}
				const weatherData = await weatherResponse.json();
				setWeatherSearchResult(weatherData);
			}
			fetchWeatherData();
			async function fetchAirPollutionData() {
				const airPollutionResponse = await fetch(
					`http://api.openweathermap.org/data/2.5/air_pollution?lat=${cityInfo.lat}&lon=${cityInfo.lon}&appid=${apiKey}`
				);

				if (!airPollutionResponse.ok) {
					throw new Error("Failed to fetch data");
				}
				const airPollutionData = await airPollutionResponse.json();
				setAirPollutionResult(airPollutionData);
			}
			fetchAirPollutionData();

			async function fetchCityName() {
				const cityNameResponse = await fetch(
					`http://api.openweathermap.org/geo/1.0/reverse?lat=${cityInfo.lat}&lon=${cityInfo.lon}&units=${celOrFar}&appid=${apiKey}`
				);

				if (!cityNameResponse.ok) {
					throw new Error("Failed to fetch data");
				}
				const cityData = await cityNameResponse.json();
				setCityName(cityData);
			}
			fetchCityName();

			async function fetchOverview() {
				const overviewResponse = await fetch(
					`https://api.openweathermap.org/data/3.0/onecall/overview?lat=${cityInfo.lat}&lon=${cityInfo.lon}&units=${celOrFar}&appid=${apiKey}`
				);

				if (!overviewResponse.ok) {
					throw new Error("Failed to fetch data");
				}
				const overviewData = await overviewResponse.json();
				setOverview(overviewData);
			}
			fetchOverview();
		}
	}, [cityInfo, celOrFar, apiKey]);

	const ctxValue = {
		setCityInfo,
		weatherSearchResult,
		toggleCelFar,
		airPollutionResult,
		cityName,
		celOrFar,
		overview,
	};

	return <WeatherContext.Provider value={ctxValue}>{children}</WeatherContext.Provider>;
}

export default WeatherContextProvider;
