import { useContext } from "react";
import WeatherContext from "../contexts/WeatherContext";
function OverView() {
	const { overview } = useContext(WeatherContext);
	console.log(overview);
	return (
		<div className="bg-lightCard dark:bg-darkCard col-span-4 row-span-3 tablet-lg:row-start-[14] h-[350px] w-full flex flex-col p-5 rounded-3xl tablet-lg:col-span-12">
			<h2>Overview</h2>
			<div className="overflow-y-auto w-full p-1">
				<p>{overview ? overview.weather_overview : "..."}</p>
			</div>
		</div>
	);
}

export default OverView;
