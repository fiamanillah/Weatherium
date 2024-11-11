function Footer() {
	return (
		<footer className="p-3 py-5 flex justify-between items-center">
            <div className="flex items-center justify-center w-full gap-3 mobile-lg:flex-col">
                <p>Copyright 2024 Fi Amanillah. All Rights Resereved.</p>
                <p className="flex items-center">Powered by <img className="h-[40px]" src="/openweather.png" alt="" /></p>
            </div>
			
		</footer>
	);
}

export default Footer;
