const Barist = () => {
	const lawyer = [
		{
			id: 0,
			imagen: "https://images.pexels.com/photos/7175955/pexels-photo-7175955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			name: "Federico",
			speciality: "Tostador",
		},
		{
			id: 1,
			imagen: "https://images.pexels.com/photos/4816462/pexels-photo-4816462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			name: "Pedro",
			speciality: "CEO Fundador",
		},
		{
			id: 2,
			imagen: "https://images.pexels.com/photos/4820661/pexels-photo-4820661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			name: "Juan",
			speciality: "Co-Fundador",
		},
	];
	return (
		<div className="h-auto w-full my-20">
			<h2 className="text-center my-5 uppercase font-semibold font-serif text-4xl">
				Conoce nuestros Tostadores
			</h2>
			<div className="grid mb-24 grid-cols-1 md:grid-cols-3 gap-20 md:gap-8 content-center place-content-center max-w-screen-lg mx-auto ">
				{lawyer &&
					lawyer.map((law) => (
						<div
							key={law.id}
							className="flex max-w-full relative justify-center mx-5 md:mx-auto"
						>
							<img
								src={law.imagen}
								alt={law.name}
								className="grayscale relative z-0 "
							/>
							<div className="absolute -bottom-8 w-2/3 text-black bg-white shadow-[0px_0px_20px_5px_#00000024] p-4 rounded-sm z-10 flex flex-col justify-center items-center ">
								<h4 className="">{law.name}</h4>
								<p className="">{law.speciality}</p>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default Barist;
