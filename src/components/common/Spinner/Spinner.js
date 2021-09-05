import { RiLoader4Fill } from "react-icons/ri";
import Center from "../blocks/Center/Center";
import styles from "./Spinner.module.scss";

const Spinner = (props) => {
	return (
		<Center className={styles.Spinner}>
			<RiLoader4Fill />
		</Center>
	);
};

export default Spinner;
