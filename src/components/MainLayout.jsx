import { Outlet, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Navbar from "./Nabvar";
import Footer from "./Footer";
import Mountain from "./Mountain";

const MainLayout = () => {
	const location = useLocation();

	return (
		<>
			<Navbar />
			<TransitionGroup>
				<CSSTransition
					key={location.key}
					timeout={300}
					classNames="page"
				>
					<main className="w-full h-auto min-h-[40vh] font-tradegothic tracking-tighter">
						<Outlet />
					</main>
				</CSSTransition>
			</TransitionGroup>
			<Mountain />
			<Footer />
		</>
	);
};

export default MainLayout;
