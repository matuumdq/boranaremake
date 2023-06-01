import Barist from "./Barist";
import Cafes from "./Cafes";
import Hero from "./Hero";
import History from "./History";

const Home = () => {
	return (
		<div>
			<Hero />
			<History />
			<Barist />
			<Cafes />
		</div>
	);
};

export default Home;
