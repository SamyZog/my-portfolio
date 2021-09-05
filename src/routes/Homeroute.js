import { useEffect, useRef } from "react";
import Aboutsection from "../components/layout/Aboutsection/Aboutsection";
import Contactsection from "../components/layout/Contactsection/Contactsection";
import Fixedcontainer from "../components/layout/Fixedcontainer/Fixedcontainer";
import Herosection from "../components/layout/Herosection/Herosection";
import Portfoliosection from "../components/layout/Portfoliosection/Portfoliosection";

const Homeroute = (props) => {
	const observerRef = useRef();

	useEffect(() => {
		observerRef.current = new IntersectionObserver(
			(changes, observer) => {
				changes.forEach((change) => {
					if (change.isIntersecting) {
						change.target.classList.add("appear");
						observer.unobserve(change.target);
					}
				});
			},
			{ threshold: 0.25 },
		);

		document.querySelectorAll("section > div").forEach((element) => {
			observerRef.current.observe(element);
		});
	}, []);

	return (
		<>
			<Fixedcontainer />
			<Herosection />
			<Aboutsection />
			<Portfoliosection />
			<Contactsection />
		</>
	);
};

export default Homeroute;
