import { useContext, useState } from "react";
import { IoLocation } from "react-icons/io5";
import WeatherContext from "../contexts/WeatherContext";
function CurrentWeather() {
	const [isCel, setIsCel] = useState(true);
	const { weatherSearchResult, toggleCelFar, cityName } = useContext(WeatherContext);
	function buttonToggler() {
		setIsCel((prev) => !prev);
		toggleCelFar();
	}

	function getDayName(timestamp) {
		const date = new Date(timestamp * 1000); // Convert from seconds to milliseconds
		return date.toLocaleString("en-US", { weekday: "long" }); // Get only the day name
	}
	function formatCustomDate(timestamp) {
		const date = new Date(timestamp * 1000); // Convert from seconds to milliseconds
		const options = {
			day: "2-digit", // "24"
			month: "short", // "Dec"
			year: "numeric", // "2024"
		};
		return date.toLocaleDateString("en-GB", options); // en-GB format for day-month-year
	}

	// if (!weatherSearchResult) {
	// 	return <p>Loading</p>;
	// }
	return (
		<div className="bg-lightCard dark:bg-darkCard col-span-4 row-span-3 tablet-lg:row-span-3 tablet-lg:col-span-12 h-full w-full flex flex-col p-5 rounded-3xl">
			<div className="flex justify-between items-center w-full">
				<div className="flex items-center py-2 px-4 bg-accent rounded-full gap-1">
					<IoLocation className="text-xl text-darkPrimaryText" />
					<strong className="text-darkPrimaryText">
						{cityName ? cityName[0].name : "..."}
					</strong>
				</div>
				<div
					className="flex gap-4 bg-lightCardSecondary dark:bg-darkCardSecondary py-1 px-4 rounded-full relative cursor-pointer select-none"
					onClick={buttonToggler}>
					<strong>C</strong>
					<strong>F</strong>
					<div
						className={`absolute h-full w-1/2 top-0 font-bold bg-accent rounded-full text-white flex justify-center items-center duration-200 ${
							isCel ? "left-0" : "left-[50%]"
						}`}>
						{isCel ? "C" : "F"}
					</div>
				</div>
			</div>

			<div className="flex mt-5 laptop-xl:flex-col tablet-lg:flex-row">
				<div className="flex flex-col gap-3 basis-1/2">
					<div>
						<strong className="text-2xl">
							{weatherSearchResult
								? getDayName(weatherSearchResult?.current.dt)
								: "Loading"}
						</strong>
						<p>
							{weatherSearchResult
								? formatCustomDate(weatherSearchResult?.current.dt)
								: "Loading"}
						</p>
					</div>

					<strong className="text-6xl !font-medium">
						{weatherSearchResult ? weatherSearchResult?.current.temp : "..."}°
						{isCel ? "C" : "F"}
					</strong>
					<p>
						High: <span>27</span>° Low: <span>10</span>°{" "}
					</p>
				</div>

				<div className="basis-1/2 laptop-xl:basis-1 laptop-xl:w-full tablet-lg:basis-1/2 flex flex-col justify-start items-end laptop-xl:items-start tablet-lg:items-end">
					<img
						className="w-32 laptop-xl:w-40 laptop-xl:self-center tablet-lg:self-end"
						src={
							weatherSearchResult
								? `https://openweathermap.org/img/wn/${weatherSearchResult.current.weather[0].icon}@2x.png`
								: "https://openweathermap.org/img/wn/10d@2x.png"
						}
						alt=""
					/>
					<div className="text-right mt-2 laptop-xl:text-left tablet-lg:text-right">
						<strong className="text-2xl font-medium">
							{weatherSearchResult
								? weatherSearchResult?.current.weather[0].main
								: "Loading"}
						</strong>
						<p>
							Feels like{" "}
							<span>
								{weatherSearchResult
									? weatherSearchResult?.current.feels_like
									: "..."}
							</span>
							°
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CurrentWeather;
