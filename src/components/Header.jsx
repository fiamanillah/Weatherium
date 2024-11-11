import Button from "./Button";
import { TbLocationSearch } from "react-icons/tb";
import { MdOutlineMyLocation } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { useState, useEffect, useContext } from "react";
import SearchSuggestion from "./SearchSuggestion";
import WeatherContext from "../contexts/WeatherContext";
import ThemeToggle from "./ThemeToggle";
import { RxCross2 } from "react-icons/rx";

function Header() {
	const [isSearchIconActive, setIsSearchIconActive] = useState(false);
	const [searchValue, setSearchValue] = useState("");
	const [citySearchResults, setCitySearchResults] = useState(null);
	const { setCityInfo } = useContext(WeatherContext);
	const [searchOpen, setSearchOpen] = useState(false);

	// Check if the searchValue is not empty
	useEffect(() => {
		setIsSearchIconActive(searchValue.trim() !== "");
	}, [searchValue]);

	const GetLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					setCityInfo({
						lat: position.coords.latitude,
						lon: position.coords.longitude,
					});
				},
				(error) => {
					console.error(error);
					alert("Unable to retrieve your location");
				}
			);
		} else {
			alert("Geolocation is not supported by your browser.");
		}
	};

	// Function to handle the search and fetch data
	const handleSearch = async () => {
		if (searchValue.trim() === "") return;

		try {
			const response = await fetch(
				`https://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&limit=5&appid=41151816b71880d54ede817918a91253`
			);

			if (!response.ok) {
				throw new Error("Failed to fetch data");
			}

			const data = await response.json();
			setCitySearchResults(data);
			console.log("Search Results:", data);
		} catch (error) {
			console.error("Error fetching data:", error);
		}

		setSearchValue(""); // Clear the search after fetching
	};

	function handleEnterSearch(e) {
		if (e.key === "Enter") {
			e.preventDefault();
			handleSearch();
		}
	}

	return (
		<header className="p-3 py-5 flex justify-between items-center relative">
			{/* Logo */}
			<img className="w-52" src="/logo.svg" alt="Logo" />

			{/* Search Box */}

			<div
				className={`basis-1/4 tablet-lg:basis-2/4 mobile-sm:w-3/4 relative mobile-sm:absolute mobile-sm:top-[100px] mobile-sm:left-1/2 mobile-sm:-translate-x-1/2 mobile-sm:z-20 mobile-sm:origin-top duration-200 ${
					searchOpen ? "mobile-sm:scale-100" : "mobile-sm:scale-0"
				}`}>
				<div
					className={`bg-lightCard dark:bg-darkCard text-lightSecondaryText dark:text-darkSecondaryText flex justify-center items-center px-5 py-1 rounded-3xl ${
						citySearchResults && "rounded-b-none"
					} overflow-hidden relative`}>
					<TbLocationSearch className="text-xl text-lightPrimaryText dark:text-darkPrimaryText" />
					<input
						className="h-full w-full outline-none py-3 px-4 bg-lightCard dark:bg-darkCard"
						type="text"
						placeholder="Search City"
						value={searchValue}
						onChange={(e) => setSearchValue(e.target.value)}
						onKeyDown={handleEnterSearch}
					/>
					{isSearchIconActive && (
						<div
							className="bg-accent absolute right-5 p-2 rounded-full translate-x-2 flex justify-center items-center hover:opacity-80 cursor-pointer select-none transition-all"
							onClick={handleSearch}>
							<FiSearch className="text-xl text-darkPrimaryText" />
						</div>
					)}
				</div>

				{citySearchResults && (
					<SearchSuggestion
						searchResults={citySearchResults}
						setCitySearchResults={setCitySearchResults}
					/>
				)}
			</div>

			<div className="flex gap-2 items-center">
				<Button
					className={"bg-accent hidden mobile-sm:block h-10"}
					onClick={() => {
						setSearchOpen((prev) => !prev);
					}}>
					{searchOpen ? (
						<RxCross2 className="text-xl text-darkPrimaryText" />
					) : (
						<FiSearch className="text-xl text-darkPrimaryText" />
					)}
				</Button>
				<Button
					className="bg-accent text-white font-bold flex items-center gap-2 px-4 py-2 rounded-full hover:bg-opacity-80 transition h-10"
					onClick={() => {
						GetLocation();
					}}>
					<MdOutlineMyLocation />
					<strong className="tablet-lg:hidden">Current Location</strong>
				</Button>
				<ThemeToggle />
			</div>
		</header>
	);
}

export default Header;
