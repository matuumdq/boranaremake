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
					<img
						src="https://res.cloudinary.com/dnqmez68n/image/upload/v1685658208/boranaverticalblanco_phtjmj.png"
						alt=""
					/>
					<div className="bg-clip-text bg-[url('https://res.cloudinary.com/dnqmez68n/image/upload/v1685722840/rust_zrxlnh.jpg')]">
						<p className="font-extrabold text-3xl text-transparent uppercase">
							Tostadores de cafe
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
