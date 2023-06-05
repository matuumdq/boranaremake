import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	return (
		<div className="absolute w-full bg-black h-20 mx-auto flex justify-between items-center p-4 top-0 z-20 bg-backblue-200  shadow-[0px_0px_20px_5px_#00000024]">
			{/* Left */}
			<Link to="/" className="flex items-center gap-6">
				<img
					src="https://res.cloudinary.com/dnqmez68n/image/upload/v1685658210/boranahorizontal_zihxfv.png"
					alt="logo"
					className="w-40 h-auto"
				/>
			</Link>
			<div className="hidden md:flex items-center cursor-pointer font-medium gap-10 p-1">
				<a
					href="#nosotros"
					className="border-y-2 py-1 uppercase border-transparent text-white hover:border-white ease-in duration-300"
				>
					Nosotros
				</a>
				<a
					href="#tienda"
					className="border-y-2 py-1 uppercase border-transparent text-white hover:border-white ease-in duration-300"
				>
					Tienda
				</a>
				<a
					href="#contacto"
					className="border-y-2 py-1 uppercase border-transparent text-white hover:border-white ease-in duration-300"
				>
					Contactanos
				</a>
			</div>
			<div
				className="cursor-pointer md:hidden"
				onClick={() => setNav(!nav)}
			>
				<AiOutlineMenu
					size={30}
					className="hover:scale-110 ease-in duration-300 text-white"
				/>
			</div>

			{/* Mobile Menu */}
			{/* Overlay */}
			{nav ? (
				<div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
			) : (
				""
			)}

			{/* Side menu */}
			<div
				className={
					nav
						? "fixed top-0 left-0 w-full sm:w-[300px] h-screen bg-gray-600 z-20 duration-300"
						: "fixed top-0 left-[-120%] w-[300px] h-screen bg-gray-600 z-10 duration-300"
				}
			>
				<AiOutlineClose
					size={30}
					className="absolute right-4 top-4 cursor-pointer hover:scale-110 ease-in duration-300"
					onClick={() => setNav(!nav)}
				/>
				<Link to="/" onClick={() => setNav(false)}>
					<img
						src="https://res.cloudinary.com/dnqmez68n/image/upload/v1685658208/boranaverticalblanco_phtjmj.png"
						alt="logo"
						className="h-36 w-auto mx-auto mt-4"
					/>
				</Link>
				<nav>
					<ul className="my-32 flex flex-col px-4 py-8 gap-10 justify-center items-center text-xl text-black">
						<a
							href="#nosotros"
							onClick={() => setNav(false)}
							className="hover:text-blue-600 hover:scale-105 ease-in duration-200 flex"
						>
							Nosotros
						</a>
						<a
							href="#tienda"
							onClick={() => setNav(false)}
							className="hover:text-blue-600 hover:scale-105 ease-in duration-200 flex"
						>
							Tienda
						</a>
						<a
							href="#contacto"
							onClick={() => setNav(false)}
							className="hover:text-blue-600 hover:scale-105 ease-in duration-200 flex"
						>
							<GrMail size={25} className="mr-4" />
							Contactanos
						</a>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
