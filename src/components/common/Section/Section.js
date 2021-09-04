import Container from "../blocks/Container/Container";
import styles from "./Section.module.scss";

const Section = ({ children, ...props }) => (
	<Container as="section" className={styles.Section} {...props}>
		{children}
	</Container>
);

export default Section;
