import { RiArrowUpCircleFill } from "react-icons/ri";
import Basebutton from "../actions/buttons/Basebutton/Basebutton";
import styles from "./Scrolltop.module.scss";

const Scrolltop = (props) => {
	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};

	return (
		<Basebutton className={styles.Scrolltop} onClick={scrollToTop}>
			<RiArrowUpCircleFill />
		</Basebutton>
	);
};

export default Scrolltop;
