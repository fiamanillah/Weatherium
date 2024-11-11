import { RiWaterPercentLine } from "react-icons/ri";
import WeatherContext from "../contexts/WeatherContext";
import { useContext } from "react";
function Humidity() {
	const { weatherSearchResult } = useContext(WeatherContext);
	return (
		<div className="bg-lightCardSecondary dark:bg-darkCardSecondary w-full  p-3 rounded-2xl">
			<span>Humidity</span>
			<div className="flex justify-between h-full items-center">
				<RiWaterPercentLine className="text-6xl text-lightPrimaryText dark:text-darkPrimaryText" />
				<h1 className="text-5xl">
					{weatherSearchResult ? weatherSearchResult?.current.humidity : "..."}
					<span className="text-2xl font-medium">%</span>
				</h1>
			</div>
		</div>
	);
}

export default Humidity;
