import Barist from "./Barist";
import Cafes from "./Cafes";
import Contact from "./Contact";
import FoundUs from "./FoundUs";
import Hero from "./Hero";
import History from "./History";
import Varieties from "./Varieties";

const Home = () => {
	return (
		<div>
			<Hero />
			<History />
			<h2 className="text-dark text-center mb-6 uppercase font-bold text-[32px] sm:text-[40px] lg:text-[36px] xl:text-[40px]">
				Conoce nuestros tostadores
			</h2>
			<Barist />
			<h2 className="text-dark text-center mb-6 uppercase font-bold text-[32px] sm:text-[40px] lg:text-[36px] xl:text-[40px]">
				Conoce nuestra historia
			</h2>
			<Cafes />
			<h2 className="text-dark text-center mb-6 uppercase font-bold text-[32px] sm:text-[40px] lg:text-[36px] xl:text-[40px]">
				nuestros cafes
			</h2>
			<Varieties />
			<h2 className="text-dark text-center mb-6 uppercase font-bold text-[32px] sm:text-[40px] lg:text-[36px] xl:text-[40px]">
				Encontranos en las siguientes cafeterias
			</h2>
			<FoundUs />
			<Contact />
		</div>
	);
};

export default Home;
