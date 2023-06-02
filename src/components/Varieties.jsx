import { coffee } from "../db";

const Varieties = () => {
	const cafes = [
		"https://res.cloudinary.com/dnqmez68n/image/upload/v1685718172/Caramel_coafnw.png",
		"https://res.cloudinary.com/dnqmez68n/image/upload/v1685719164/fazenda_gwihos.png",
		"https://res.cloudinary.com/dnqmez68n/image/upload/v1685718317/TOpazio_w51lzm.png",
		"https://res.cloudinary.com/dnqmez68n/image/upload/v1685719164/Cauca_dnmnqb.png",
		"https://res.cloudinary.com/dnqmez68n/image/upload/v1685719288/finca_vnoybr.png",
	];
	return (
		<div className="flex flex-col md:grid md:grid-cols-2 gap-4 mx-5 md:mx-auto md:max-w-screen-xl mb-6">
			{coffee.map((cafe) => (
				<div key={cafe.id} className="flex mx-5">
					<div className="flex flex-col w-full relative">
						<div className="flex flex-col">
							<h2 className="text-4xl font-bold uppercase">
								{cafe.nombre}
							</h2>
							<div className="mr-6 grid grid-cols-3 grid-rows-2 gap-x-3 my-4  ">
								<p className="uppercase text-sm border-b-2 border-black pb-1">
									puntaje de cata :
								</p>
								<p className="row-span-2 col-span-2 text-4xl font-bold text-center my-auto">
									{Number(cafe.punt).toFixed(2)}
								</p>
								<p className="uppercase text-sm pt-1">
									{cafe.calif}
								</p>
							</div>
						</div>
						<img
							src={cafe.pais}
							alt=""
							className="h-auto w-14 object-contain absolute right-0"
						/>
						<p className="border-b-2 border-black mr-[30%] font-semibold text-sm py-1.5 uppercase">
							Region: {cafe.region}
						</p>
						<p className="border-b-2 border-black mr-[30%] font-semibold text-sm py-1.5 uppercase">
							Variedad: {cafe.variedad}
						</p>
						<p className="border-b-2 border-black mr-[30%] font-semibold text-sm py-1.5 uppercase">
							Proceso: {cafe.proceso}
						</p>
						<p className=" font-semibold text-sm py-1.5 uppercase">
							Altura: {cafe.altura} metros sobre el nivel del mar
						</p>
					</div>
					<div>
						{" "}
						<img src={cafe.grano} alt="" />
					</div>
					<div></div>
				</div>
			))}
			{cafes.map((cafe, index) => (
				<div key={index}>
					<img src={cafe} alt="" />
				</div>
			))}
		</div>
	);
};

export default Varieties;
