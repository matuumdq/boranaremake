import { AiOutlineShoppingCart } from "react-icons/ai";

const History = () => {
	return (
		<div id="nosotros" className="h-auto min-h-screen w-full my-3">
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
				<div className="bg-white py-4 md:bg-white md:h-56 flex flex-col justify-center items-center px-4 md:px-16 gap-4">
					<h3 className="font-semibold text-xl uppercase">
						Nuestros Cafes
					</h3>
					<p className="text-gray-800">
						Sólo adquirimos cafés de especialidad con ficha de
						trazabilidad y calificaciones mayores a 82 puntos según
						la SCA (Specialty Coffee Association)
					</p>
				</div>
				<div className="bg-white py-4 md:bg-gray-300 md:h-56 flex flex-col justify-center items-center px-4 md:px-16 gap-4">
					<h3 className="font-semibold text-xl uppercase">
						Modalidad
					</h3>
					<p className="text-gray-800">
						Trabajamos con modalidad Boutique, es decir sólo
						tostamos cantidades que nos aseguramos vender en el
						corto plazo, asegurando la frescura del producto.
					</p>
				</div>
				<div className="bg-white py-4 md:bg-gray-300 md:h-56 flex flex-col justify-center items-center px-4 md:px-16 gap-4">
					<h3 className="font-semibold text-xl uppercase">Calidad</h3>
					<p className="text-gray-800">
						Aplicamos técnicas de manufactura y métodos de control
						que permiten asegurar la consistencia en la calidad de
						nuestros productos y la inocuidad de los mismos.
					</p>
				</div>
				<div className="bg-white py-4 md:bg-white md:h-56 flex w-full flex-col justify-center items-center px-4 md:px-16 gap-4">
					<h3 className="font-semibold text-xl uppercase">
						Visita nuestra tienda Online
					</h3>
					<p className="text-gray-800">
						Y disfruta tu cafe favorito en tu casa
					</p>
					<a
						href="#tienda"
						className="bg-white text-gray-800 font-bold rounded border-b-2 border-gray-400 hover:border-gray-400 hover:bg-gray-300 hover:text-white shadow-md py-1 px-2 inline-flex items-center ease-in duration-300"
					>
						<span className="mr-2 uppercase">TIENDA</span>
						<AiOutlineShoppingCart />
					</a>
				</div>
			</div>
		</div>
	);
};

export default History;
