import Barist from "./Barist";
import Cafes from "./Cafes";
import Contact from "./Contact";
import FoundUs from "./FoundUs";
import Hero from "./Hero";
import History from "./History";
import Scroll from "./Scroll";
import Varieties from "./Varieties";

const Home = () => {
	return (
		<div>
			<Hero />
			<History />
			<div className="bg-[#DAD5C8] py-4">
				<h2 className="text-dark text-center mb-6 uppercase font-bold text-[32px] sm:text-[40px] lg:text-[36px] xl:text-[40px]">
					Conoce nuestros tostadores
				</h2>
				<Barist />
			</div>
			<h2
				id="historia"
				className="text-dark text-center mb-6 uppercase font-bold text-[32px] sm:text-[40px] lg:text-[36px] xl:text-[40px] mt-6"
			>
				Conoce nuestra historia
			</h2>

			<Cafes />
			<div className="mt-5">
				<h2 className="text-dark text-center mb-6 uppercase font-bold text-[32px] sm:text-[40px] lg:text-[36px] xl:text-[40px]">
					nuestros cafes
				</h2>
				<Varieties />
			</div>
			<h2 className="text-dark text-center mb-6 uppercase font-bold text-[32px] sm:text-[40px] lg:text-[36px] xl:text-[40px]">
				Encontranos en las siguientes cafeterias
			</h2>
			<FoundUs />
			<Contact />
			<Scroll />
		</div>
	);
};

export default Home;
