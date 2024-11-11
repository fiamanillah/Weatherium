import { AiOutlineEye } from "react-icons/ai";
import WeatherContext from "../contexts/WeatherContext";
import { useContext } from "react";
function Visibility() {
	const { weatherSearchResult } = useContext(WeatherContext);
	return (
		<div className="bg-lightCardSecondary dark:bg-darkCardSecondary w-full  p-3 rounded-2xl">
			<span>Visibility</span>
			<div className="flex justify-between h-full items-center">
				<AiOutlineEye className="text-6xl text-lightPrimaryText dark:text-darkPrimaryText" />
				<h1 className="text-5xl">
					{weatherSearchResult ? weatherSearchResult?.current.visibility / 1000 : "..."}
					<span className="text-2xl font-medium">km</span>
				</h1>
			</div>
		</div>
	);
}

export default Visibility;
