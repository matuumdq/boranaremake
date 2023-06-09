import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
const Scroll = () => {
	const [showScrollButton, setShowScrollButton] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			if (window.pageYOffset > 200) {
				setShowScrollButton(true);
			} else {
				setShowScrollButton(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<div className="fixed bottom-16 right-0 mb-4 mr-9 z-50">
			{showScrollButton && (
				<IoIosArrowUp
					className="p-1 rounded-lg bg-gray-200 fold:text-3xl text-gray-800 cursor-pointer"
					onClick={() => {
						window.scrollTo({ top: 0, behavior: "smooth" });
					}}
				/>
			)}
		</div>
	);
};

export default Scroll;
