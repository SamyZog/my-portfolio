import { RiArrowDropDownLine, RiMouseLine } from "react-icons/ri";
import Vstack from "../blocks/Vstack/Vstack";
import styles from "./Scrollindicator.module.scss";

const Scrollindicator = (props) => {
	return (
		<Vstack className={styles.Scrollindicator}>
			<RiMouseLine />
			<RiArrowDropDownLine />
		</Vstack>
	);
};

export default Scrollindicator;
