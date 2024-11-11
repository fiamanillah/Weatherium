import { useEffect, useState } from "react";
import { FaWind } from "react-icons/fa6";

function AirQuality({ airPollutionResult }) {
	const [airQuality, setAirQuality] = useState("...");

	useEffect(() => {
		if (airPollutionResult) {
			switch (airPollutionResult.list[0].main.aqi) {
				case 1:
					setAirQuality("Good");
					break;
				case 2:
					setAirQuality("Fair");
					break;
				case 3:
					setAirQuality("Moderate");
					break;
				case 4:
					setAirQuality("Poor");
					break;
				case 5:
					setAirQuality("Very Poor");
					break;

				default:
					setAirQuality("...");
					break;
			}
		}
	}, [airPollutionResult]);

	const bgColorClass =
		airQuality === "Good"
			? "bg-green-500"
			: airQuality === "Fair"
			? "bg-blue-500"
			: airQuality === "Moderate"
			? "bg-yellow-500"
			: airQuality === "Poor"
			? "bg-orange-500"
			: airQuality === "Very Poor"
			? "bg-red-500"
			: "bg-gray-500";

	return (
		<div className="bg-lightCardSecondary dark:bg-darkCardSecondary w-full col-span-2 p-3 rounded-2xl">
			<div className="flex justify-between">
				<span>Air Quality Index</span>
				<span
					className={`${bgColorClass} py-1 px-4 rounded-full !text-darkPrimaryText font-bold`}>
					{airQuality}
				</span>
			</div>

			<div className="flex items-center justify-between w-full gap-4">
				<FaWind className="text-5xl text-lightPrimaryText dark:text-darkPrimaryText" />

				<div className="flex-grow py-4">
					<ul className="flex w-full justify-between">
						<li className="flex flex-col items-center">
							<span>SO2</span>
							<h2 className="text-3xl font-medium ">
								{airPollutionResult
									? airPollutionResult.list[0].components.so2
									: "..."}
							</h2>
						</li>

						<li className="flex flex-col items-center">
							<span>NO2</span>
							<h2 className="text-3xl font-medium ">
								{airPollutionResult
									? airPollutionResult.list[0].components.no2
									: "..."}
							</h2>
						</li>

						<li className="flex flex-col items-center">
							<span>O3</span>
							<h2 className="text-3xl font-medium ">
								{airPollutionResult
									? airPollutionResult.list[0].components.o3
									: "..."}
							</h2>
						</li>

						<li className="flex flex-col items-center">
							<span>CO</span>
							<h2 className="text-3xl font-medium ">
								{airPollutionResult
									? airPollutionResult.list[0].components.co
									: "..."}
							</h2>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default AirQuality;
