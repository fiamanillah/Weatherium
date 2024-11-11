import { LiaWindSolid } from "react-icons/lia";
import { WiTsunami } from "react-icons/wi";
import WeatherContext from "../contexts/WeatherContext";
import { useContext } from "react";

function Wind() {
	const { weatherSearchResult, celOrFar } = useContext(WeatherContext);
	return (
		<div className="bg-lightCard dark:bg-darkCard col-span-4 row-span-2 h-full w-full flex flex-col p-5 rounded-3xl tablet-lg:col-span-12">
			<span>Wind</span>
			<div className="flex h-full items-center justify-between laptop-xl:flex-col laptop-xl:items-start laptop-xl:justify-around tablet-lg:flex-row tablet-lg:items-center">
				<div className="flex gap-2 items-center">
					<LiaWindSolid className="text-6xl text-lightPrimaryText dark:text-darkPrimaryText" />

					<div>
						<span>Wind Speed</span>
						<h1>
							{weatherSearchResult ? weatherSearchResult?.current.wind_speed : "..."}
							<span className="text-2xl font-medium">
								{celOrFar === "metric"
									? "m/s"
									: celOrFar === "imperial"
									? "mil/h"
									: "..."}
							</span>
						</h1>
					</div>
				</div>
				<div className="flex gap-2 items-center">
					<WiTsunami className="text-7xl text-lightPrimaryText dark:text-darkPrimaryText" />

					<div>
						<span>Wind Direction</span>
						<h1>
							{weatherSearchResult ? weatherSearchResult?.current.wind_deg : "..."}
                            <span className="text-2xl font-medium">deg</span>
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Wind;
