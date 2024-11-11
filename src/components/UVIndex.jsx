import { WiHot } from "react-icons/wi";
import WeatherContext from "../contexts/WeatherContext";
import { useContext } from "react";

function UVIndex() {
	const { weatherSearchResult } = useContext(WeatherContext);
	const UVI = weatherSearchResult?.current?.uvi;

	// Determine the UV Index Level
	const UVILevel =
		UVI === undefined
			? "..."
			: UVI <= 2
			? "Low"
			: UVI > 2 && UVI <= 5
			? "Moderate"
			: UVI > 5 && UVI <= 7
			? "High"
			: UVI > 7 && UVI <= 10
			? "Very High"
			: "Extreme";

	return (
		<div className="bg-lightCardSecondary dark:bg-darkCardSecondary w-full p-3 rounded-2xl">
			<span>UV Index</span>
			<div className="flex justify-between h-full items-center">
				<WiHot className="text-6xl text-lightPrimaryText dark:text-darkPrimaryText" />
				<h1 className="text-5xl">
					{UVI !== undefined ? UVI : "..."}
					<span className="text-2xl ml-2 font-medium">{UVILevel}</span>
				</h1>
			</div>
		</div>
	);
}

export default UVIndex;
