import { useContext } from "react";
import WeatherContext from "../contexts/WeatherContext";
import { MdOutlineWbSunny } from "react-icons/md";
import { FiMoon } from "react-icons/fi";

function SunRiseSUnSet() {
	const { weatherSearchResult } = useContext(WeatherContext);

	const sunrise = weatherSearchResult ? weatherSearchResult?.current?.sunrise : "";
	const sunset = weatherSearchResult ? weatherSearchResult?.current?.sunset : "";

	const convertToTime = (timestamp) => {
		const date = new Date(timestamp * 1000); // Convert to milliseconds
		return date.toLocaleTimeString("en-US", {
			hour: "numeric",
			minute: "numeric",
			hour12: true,
		});
	};
	return (
		<div className="bg-lightCardSecondary dark:bg-darkCardSecondary w-full col-span-2 p-3 rounded-2xl">
			<span>Sunrise & Sunset</span>
			<div className="flex h-full items-center justify-between">
				<div className="flex gap-2 items-center">
					<MdOutlineWbSunny className="text-6xl text-lightPrimaryText dark:text-darkPrimaryText" />

					<div>
						<span>Sunrise</span>
						<h1>{weatherSearchResult ? convertToTime(sunrise) : "..."}</h1>
					</div>
				</div>
				<div className="flex gap-2 items-center">
					<FiMoon className="text-6xl text-lightPrimaryText dark:text-darkPrimaryText" />

					<div>
						<span>Sunset</span>
						<h1>{weatherSearchResult ? convertToTime(sunset) : "..."}</h1>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SunRiseSUnSet;
