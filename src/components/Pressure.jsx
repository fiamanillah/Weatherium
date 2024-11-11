import { TiWaves } from "react-icons/ti";
import WeatherContext from "../contexts/WeatherContext";
import { useContext } from "react";
function Pressure() {
	const { weatherSearchResult } = useContext(WeatherContext);
	return (
		<div className="bg-lightCardSecondary dark:bg-darkCardSecondary w-full  p-3 rounded-2xl">
			<span>Pressure</span>
			<div className="flex justify-between h-full items-center">
				<TiWaves className="text-7xl text-lightPrimaryText dark:text-darkPrimaryText" />
				<h1 className="text-4xl">
					{weatherSearchResult ? weatherSearchResult?.current.pressure : "..."}
					<span className="text-2xl font-medium">hPa</span>
				</h1>
			</div>
		</div>
	);
}

export default Pressure;
