import { coffee } from "../db";
import { GiCoffeeBeans } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Varieties = () => {
	const cafes = [
		"https://res.cloudinary.com/dnqmez68n/image/upload/v1685718172/Caramel_coafnw.png",
		"https://res.cloudinary.com/dnqmez68n/image/upload/v1685719164/fazenda_gwihos.png",
		"https://res.cloudinary.com/dnqmez68n/image/upload/v1685718317/TOpazio_w51lzm.png",
		"https://res.cloudinary.com/dnqmez68n/image/upload/v1685719164/Cauca_dnmnqb.png",
		"https://res.cloudinary.com/dnqmez68n/image/upload/v1685719288/finca_vnoybr.png",
	];
	return (
		<div className="flex flex-col gap-4 mb-6">
			{coffee.map((cafe) => (
				<div
					key={cafe.id}
					className={`flex md:min-h-screen md:grid md:grid-cols-3 relative pt-8 flex-col rounded-3xl md:rounded-none p-4`}
					style={{
						backgroundImage: `url(${cafe.fondo})`,
						backgroundPosition: "center",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
					}}
				>
					<img
						src="https://res.cloudinary.com/dnqmez68n/image/upload/v1685658210/boranahorizontal_zihxfv.png"
						alt=""
						className="h-auto w-28 absolute right-0 top-2"
					/>
					<div className="flex flex-col w-full relative justify-around ">
						<div className="flex flex-col md:mt-20 font-trade">
							<h2 className="text-5xl md:text-7xl font-extrabold uppercase tracking-widest">
								{cafe.nombre}
							</h2>
							<h3 className="text-3xl md:text-5xl font-extrabold uppercase">
								{cafe.nombre2}
							</h3>
						</div>
						<div className="mr-6 grid grid-cols-3 grid-rows-2 gap-x-3 my-4 md:-mt-10  font-trade">
							<p className="uppercase text-sm border-b-2 border-black pb-1">
								puntaje de cata:
							</p>
							<p className="row-span-2 col-span-2 text-4xl font-bold text-center my-auto">
								{Number(cafe.punt).toFixed(2)}
							</p>
							<p className="uppercase text-sm pt-1">
								{cafe.calif}
							</p>
						</div>
						<div>
							<img
								src={cafe.pais}
								alt=""
								className="h-auto w-14 object-contain absolute right-0 top-14 md:top-0 md:left-0"
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
								Altura: {cafe.altura} metros sobre el nivel del
								mar
							</p>
						</div>
					</div>
					<div className="flex justify-center items-center h-full">
						{" "}
						<img
							src={cafe.grano}
							alt={cafe.nombre}
							className="hidden md:block h-auto max-h-96 w-auto mx-auto my-5"
						/>
					</div>
					<div className="flex flex-col md:justify-around lg:ml-32">
						<div className="flex flex-col gap-1 relative">
							{cafe.stock === "no" && (
								<img
									src="https://res.cloudinary.com/dnqmez68n/image/upload/v1685816955/out_of_stock_1_hvk0po.png"
									alt="sin Stock"
									className="absolute top-0 h-32 right-0"
								/>
							)}
							<h3 className="uppercase font-bold">Valores:</h3>
							<div className="max-w-xs flex items-center justify-between gap-4">
								<div className="flex flex-wrap justify-between w-full border-t-2 border-black pt-1">
									<p className="uppercase ">Pack 250gr:</p>
									<p className="font-semibold">
										${cafe.precio250}.-
									</p>
								</div>
								{cafe.stock === "si" ? (
									<a
										href={`https://api.whatsapp.com/send?phone=+5491124725859&text=Hola,%20quiero%20el%20cafe%20${cafe.nombre}%20en%20su%20version%20de:%20250%20gramos`}
										target="_blank"
										rel="noreferrer"
										className="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-1 px-2 inline-flex items-center ease-in duration-300"
									>
										<span className="mr-2 uppercase">
											Comprar
										</span>
										<AiOutlineShoppingCart />
									</a>
								) : (
									<div></div>
								)}
							</div>
							<div className="max-w-xs flex items-center justify-between gap-4">
								<div className="flex flex-wrap justify-between w-full border-t-2 border-black pt-1">
									<p className="uppercase ">Pack 1kg:</p>
									<p className="font-semibold">
										${cafe.precio1k}.-
									</p>
								</div>

								{cafe.stock === "si" ? (
									<a
										href={`https://api.whatsapp.com/send?phone=+5491124725859&text=Hola,%20quiero%20el%20cafe%20${cafe.nombre}%20en%20su%20version%20de:%201%20KG`}
										target="_blank"
										rel="noreferrer"
										className="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-1 px-2 inline-flex items-center ease-in duration-300"
									>
										<span className="mr-2 uppercase">
											Comprar
										</span>
										<AiOutlineShoppingCart />
									</a>
								) : (
									<div></div>
								)}
							</div>
						</div>
						<div className="hidden md:flex flex-col gap-4 ">
							{cafe.text1 && <p>{cafe.text1}</p>}
							{cafe.text2 && <p>{cafe.text2}</p>}
							{cafe.text3 && <p>{cafe.text3}</p>}
						</div>
						<div className="flex flex-col justify-center items-center md:items-start gap-3 my-5">
							<h3 className="uppercase font-semibold">
								Recomendado para:{" "}
							</h3>
							<div className="grid grid-cols-2 gap-x-4 max-w-sm content-center md:gap-4">
								{cafe.reco.map((rec, index) => (
									<div
										key={index}
										className="flex items-center gap-2"
									>
										<GiCoffeeBeans className="text-lg" />
										<p>{rec}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			))}
			{cafes.map((cafe, index) => (
				<div key={index} className="w-full">
					<img src={cafe} alt="" className="w-full h-auto" />
				</div>
			))}
		</div>
	);
};

export default Varieties;
