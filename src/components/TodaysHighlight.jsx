import { useContext } from "react";
import WeatherContext from "../contexts/WeatherContext";
import AirQuality from "./AirQuality";
import Humidity from "./Humidity";
import Pressure from "./Pressure";
import Visibility from "./Visibility";
import UVIndex from "./UVIndex";
import SunRiseSUnSet from "./SunRiseSUnSet";
function TodaysHighlight() {
	const { airPollutionResult } = useContext(WeatherContext);

	return (
		<div className="bg-lightCard dark:bg-darkCard col-span-8 row-span-4 tablet-lg:col-span-12 tablet-lg:row-span-6 h-full w-full flex flex-col p-5 rounded-3xl tablet-lg:pb-20">
			<h1 className="text-2xl mb-2">Todays Highlights</h1>
			<div className="w-full grid grid-cols-4 grid-rows-2 gap-2 h-full laptop-xl:grid-cols-2 laptop-xl:grid-rows-4">
				<AirQuality airPollutionResult={airPollutionResult} />
				<Humidity />
				<Pressure />
				<Visibility />
				<UVIndex />
				<SunRiseSUnSet />
			</div>
		</div>
	);
}

export default TodaysHighlight;
