import { useEffect } from "react";
import { joinClasses } from "../../../utils/joinClasses";
import Container from "../blocks/Container/Container";
import styles from "./Section.module.scss";

const Section = ({ children, className, ...props }) => {
	const css = joinClasses(styles.Section, className);

	const handleResize = () => {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty("--vh", `${vh}px`);
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<Container as="section" className={css} {...props}>
			{children}
		</Container>
	);
};

export default Section;
