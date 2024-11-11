import CurrentWeather from "../components/CurrentWeather";
import DailyForeCast from "../components/DailyForeCast";
import HourlyForecast from "../components/HourlyForecast";
import OverView from "../components/OverView";
import TodaysHighlight from "../components/TodaysHighlight";
import Wind from "../components/Wind";

function MainSection() {
	return (
		<section className="grid grid-cols-12 grid-rows-8 py-5 gap-[2%] tablet-lg:grid-cols-10">
			<CurrentWeather />
			<TodaysHighlight />
			<Wind />
			<HourlyForecast />
			<OverView />
			<DailyForeCast />
		</section>
	);
}

export default MainSection;
