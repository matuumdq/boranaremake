const History = () => {
	return (
		<div className="h-auto min-h-screen w-full my-3">
			<div className="h-full w-full absolute flex justify-center md:grid md:grid-cols-2 md:grid-rows-2">
				<img
					src="https://images.pexels.com/photos/7400278/pexels-photo-7400278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt=""
					className="object-cover w-full h-auto sm:max-h-screen"
				/>
				<img
					src="https://images.pexels.com/photos/4913342/pexels-photo-4913342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt=""
					className="object-cover w-full h-full row-span-2 hidden md:block"
				/>
				<img
					src="https://images.pexels.com/photos/4927142/pexels-photo-4927142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt=""
					className="object-cover w-full h-full hidden md:block"
				/>
			</div>
			<div className="relative grid grid-cols-1 md:grid-cols-2 content-center place-items-center gap-1 md:gap-0 min-h-screen w-full max-w-screen-lg mx-auto">
				<div className="bg-slate-200 py-4 md:bg-gray-400 md:h-56 flex flex-col justify-center items-center px-16 gap-4">
					<h3 className="font-semibold text-xl uppercase">TITULO</h3>
					<p className="text-yellow-400">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Dolorum impedit veritatis error fugiat necessitatibus
						repellendus.
					</p>
				</div>
				<div className="bg-slate-200 py-4 md:bg-gray-200 md:h-56 flex flex-col justify-center items-center px-16 gap-4">
					<h3 className="font-semibold text-xl uppercase">TITULO</h3>
					<p className="text-yellow-400">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Dolorum impedit veritatis error fugiat necessitatibus
						repellendus.
					</p>
				</div>
				<div className="bg-slate-200 py-4 md:bg-gray-200 md:h-56 flex flex-col justify-center items-center px-16 gap-4">
					<h3 className="font-semibold text-xl uppercase">TITULO</h3>
					<p className="text-yellow-400">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Dolorum impedit veritatis error fugiat necessitatibus
						repellendus.
					</p>
				</div>
				<div className="bg-slate-200 py-4 md:bg-gray-400 md:h-56 flex flex-col justify-center items-center px-16 gap-4">
					<h3 className="font-semibold text-xl uppercase">TITULO</h3>
					<p className="text-yellow-400">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Dolorum impedit veritatis error fugiat necessitatibus
						repellendus.
					</p>
				</div>
			</div>
		</div>
	);
};

export default History;
