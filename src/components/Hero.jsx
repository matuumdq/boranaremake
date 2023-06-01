const Hero = () => {
	return (
		<div className="h-screen max-h-screen">
			<img
				src="https://images8.alphacoders.com/939/939996.jpg"
				alt=""
				className="w-full h-auto min-h-screen max-h-screen object-cover -z-10 absolute"
			/>
			<div className="relative text-white w-full flex items-center justify-start md:pl-24 h-full">
				<div className="flex flex-col items-center">
					{/* <h1 className="text-white font-bold text-4xl">BORANA</h1> */}
					<img
						src="https://res.cloudinary.com/dnqmez68n/image/upload/v1685658208/boranaverticalblanco_phtjmj.png"
						alt=""
					/>
					<p>Tostadores de cafe</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;
