import { useContext } from "react";
import WeatherContext from "../contexts/WeatherContext";

function DailyForeCast() {
	const { weatherSearchResult } = useContext(WeatherContext);
	const convertToTime = (timestamp) => {
		const date = new Date(timestamp * 1000); // Convert to milliseconds
		return date.toLocaleTimeString("en-US", {
			hour: "numeric",
			hour12: true,
		});
	};

	return (
		<div className="bg-lightCard dark:bg-darkCard col-span-8 row-span-2 laptop-xl:row-span-1 tablet-lg:col-span-12 h-full w-full flex flex-col p-5 py-0 pt-3 rounded-3xl">
			<h2>7 Days Forecast</h2>
			<ul className="flex gap-2 overflow-x-auto overflow-y-hidden">
				{weatherSearchResult &&
					weatherSearchResult.daily.slice(0, 7).map((data, i) => (
						<li
							className="bg-lightCardSecondary dark:bg-darkCardSecondary flex flex-col justify-center items-center py-2 px-3 rounded-2xl my-2"
							key={i}>
							<span>{convertToTime(data.dt)}</span>
							<img
								src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
								alt=""
							/>
							<span>{data.temp.day}°</span>
						</li>
					))}
			</ul>
		</div>
	);
}

export default DailyForeCast;
