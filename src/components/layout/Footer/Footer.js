import Center from "../../common/blocks/Center/Center";
import Hstack from "../../common/blocks/Hstack/Hstack";
import Vstack from "../../common/blocks/Vstack/Vstack";
import Signature from "../../common/Signature/Signature";
import Sociallinks from "../../common/Sociallinks/Sociallinks";
import styles from "./Footer.module.scss";

const Footer = (props) => {
	return (
		<Center as="footer" className={styles.Footer}>
			<Vstack>
				<Hstack as="ul" className={styles.linkscontainer}>
					<Sociallinks />
				</Hstack>
				<Signature />
			</Vstack>
		</Center>
	);
};

export default Footer;
