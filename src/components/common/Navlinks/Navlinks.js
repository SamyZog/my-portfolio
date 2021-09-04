import { RiChat4Line, RiCodeSSlashFill, RiInformationLine } from "react-icons/ri";
import Baselink from "../actions/links/Baselink/Baselink";
import Center from "../blocks/Center/Center";
import styles from "./Navlinks.module.scss";

const Navlinks = (props) => (
	<>
		<Center as="li" className={styles.Navlinks}>
			<Baselink href="#about">
				About
				<RiInformationLine />
			</Baselink>
		</Center>
		<Center as="li" className={styles.Navlinks}>
			<Baselink href="#portfolio">
				Portfolio
				<RiCodeSSlashFill />
			</Baselink>
		</Center>
		<Center as="li" className={styles.Navlinks}>
			<Baselink href="#contact">
				Contact
				<RiChat4Line />
			</Baselink>
		</Center>
	</>
);

export default Navlinks;
