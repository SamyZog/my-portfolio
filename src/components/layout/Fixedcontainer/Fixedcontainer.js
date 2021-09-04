import Box from "../../common/blocks/Box/Box";
import Vstack from "../../common/blocks/Vstack/Vstack";
import Sociallinks from "../../common/Sociallinks/Sociallinks";
import styles from "./Fixedcontainer.module.scss";

const Fixedcontainer = (props) => {
	return (
		<Box className={styles.Fixedcontainer}>
			<Vstack as="ul" className={styles.linkscontainer}>
				<Sociallinks />
			</Vstack>
		</Box>
	);
};

export default Fixedcontainer;
