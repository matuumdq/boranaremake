import { BsInstagram, BsWhatsapp } from "react-icons/bs";
const Footer = () => {
	return (
		<footer className="w-full bg-black shadow-[0px_0px_20px_5px_#00000024] py-4">
			<div className=" mx-10 flex flex-col md:flex-row gap-4 justify-between items-center">
				<div>
					<img
						src="https://res.cloudinary.com/dnqmez68n/image/upload/v1685658210/boranahorizontal_zihxfv.png"
						alt="Borana logo"
						className="h-16"
					/>
				</div>
				<div className="flex flex-col font-semibold self-center text-sm md:block text-white">
					<span>©{new Date().getFullYear()} All rights reserved</span>
				</div>
				<div className="flex justify-center space-x-4 lg:pt-0 lg:col-end-13">
					<a
						rel="noopener noreferrer"
						href="https://www.instagram.com/borana.cafe"
						target="_blank"
						title="Instagram"
						className="flex items-center justify-center w-10 h-10 rounded-full bg-white hover:scale-110 ease-in duration-300"
					>
						<BsInstagram className="text-2xl hover:text-pink-600 ease-in duration-300" />
					</a>
					<a
						rel="noopener noreferrer"
						href="https://api.whatsapp.com/send?phone=+5492236035028&text=Hola%20Borana!%20"
						target="_blank"
						title="Whatsapp"
						className="flex items-center justify-center w-10 h-10 rounded-full bg-white hover:scale-110 ease-in duration-300"
					>
						<BsWhatsapp className="text-2xl hover:text-green-500 ease-in duration-300" />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
