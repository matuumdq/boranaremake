const Cafes = () => {
	return (
		<div className="flex md:bg-[#eeeeee] flex-col mx-5 md:mx-auto gap-5 md:gap-0 md:grid md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 min-h-screen md:max-h-screen">
			<div className="row-span-2 hidden lg:block">
				<img
					src="https://res.cloudinary.com/dnqmez68n/image/upload/v1685716646/Image_nqyme9.png"
					alt=""
					className="object-cover h-full"
				/>
			</div>
			<div className="flex justify-center items-center">
				<p className="md:text-lg md:w-2/3 tracking-normal md:tracking-tight">
					Borana nace en 2020 en Mar del Plata como un tostadero de
					café de especialidad impulsado por el deseo de ofrecer café
					de alta calidad y de diversos orígenes. Luego de tostar,
					desarrollar y validar nuestros primeros granos y perfiles,
					Borana es introducida al mercado local como una Boutique de
					Café.
				</p>
			</div>
			<div className="">
				<img
					src="https://res.cloudinary.com/dnqmez68n/image/upload/v1685715531/boranared_vf1iaq.png"
					alt=""
					className="object-cover h-full w-full "
				/>
			</div>
			<div className="hidden md:block bg-[#DAD5C8]">
				<img
					src="https://res.cloudinary.com/dnqmez68n/image/upload/v1686062928/evaluacion_s8owkd.png"
					alt=""
					className="object-contain  h-full w-full"
				/>
			</div>
			<div className="flex justify-center items-center">
				<p className="md:text-lg md:w-2/3 tracking-normal md:tracking-tight">
					Para quienes hacemos Borana, un café de especialidad es
					aquel que activa todos tus sentidos con aromas sorprendentes
					y deliciosas notas en boca.
				</p>
			</div>
			<div className="md:hidden bg-[#DAD5C8]">
				<img
					src="https://res.cloudinary.com/dnqmez68n/image/upload/v1686062928/evaluacion_s8owkd.png"
					alt=""
					className="object-contain h-96 w-full rounded-b-lg"
				/>
			</div>
		</div>
	);
};

export default Cafes;
