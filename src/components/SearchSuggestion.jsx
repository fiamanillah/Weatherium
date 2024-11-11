import { useContext } from "react";
import { IoLocationOutline } from "react-icons/io5";
import WeatherContext from "../contexts/WeatherContext";
function SearchSuggestion({ searchResults, setCitySearchResults }) {
	const { setCityInfo, weatherSearchResult } = useContext(WeatherContext);
	console.log(weatherSearchResult);
	return (
		<div className="bg-lightCard dark:bg-darkCard absolute w-full -top- left-0 overflow-hidden rounded-b-3xl z-10 border border-gray-200  dark:border-black border-t-primary dark:border-t-white">
			<ul className="">
				{searchResults.map((city, i) => (
					<li
						className="flex items-center gap-2 py-2 px-3 dark:hover:bg-darkCardHover hover:bg-lightCardHover cursor-pointer"
						key={i}
						onClick={() => {
							setCityInfo(city);
							setCitySearchResults("");
						}}>
						<IoLocationOutline className="text-xl text-lightPrimaryText dark:text-darkPrimaryText" />
						<div className="flex flex-col justify-center leading-none">
							<h3 className="leading-none">{city.name}</h3>
							<span>{city.state}</span>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default SearchSuggestion;
