import { joinClasses } from "../../../utils/joinClasses";
import Container from "../blocks/Container/Container";
import styles from "./Section.module.scss";

const Section = ({ children, className, ...props }) => {
	const css = joinClasses(styles.Section, className);

	return (
		<Container as="section" className={css} {...props}>
			{children}
		</Container>
	);
};

export default Section;
