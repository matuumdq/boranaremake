import { useEffect, useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
const Scroll = () => {
	const [showScrollButton, setShowScrollButton] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			if (window.pageYOffset > 10) {
				// Mostrar el botón de regreso al inicio después de desplazarse 200 píxeles hacia abajo
				setShowScrollButton(true);
			} else {
				setShowScrollButton(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		// Eliminar el evento de escucha al desmontar el componente
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<div className="fixed bottom-10 right-0 mb-4 mr-4 z-50">
			{showScrollButton && (
				<BsFillArrowUpCircleFill
					className="text-3xl fold:text-5xl text-gray-800"
					onClick={() => {
						window.scrollTo({ top: 0, behavior: "smooth" });
					}}
				/>
			)}
		</div>
	);
};

export default Scroll;
