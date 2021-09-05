import Basebutton from "../../common/actions/buttons/Basebutton/Basebutton";
import Divider from "../../common/blocks/Divider/Divider";
import Hstack from "../../common/blocks/Hstack/Hstack";
import Vstack from "../../common/blocks/Vstack/Vstack";
import Copy from "../../common/Copy/Copy";
import Section from "../../common/Section/Section";
import Text from "../../common/typography/Text/Text";
import styles from "./Contactsection.module.scss";

const Contactsection = (props) => {
	return (
		<Section>
			<Vstack className={styles.Contactsection}>
				<Text id="contact" as="h1">
					Contact
				</Text>
				<Divider />
				<Text>
					I&apos;m currently looking for exciting opportunitites, specifically a{" "}
					<strong>JavaScript / React Developer</strong> position, so if you have an offer, or just want to
					reach out to say hi, my inbox is always open!
				</Text>
				<Hstack className={styles.calltoaction}>
					<Basebutton as="a" href="mailto:contact@samyzogeyb.com" className={styles.action}>
						Say Hi
					</Basebutton>
					<Copy>contact@samyzogeyb.com</Copy>
				</Hstack>
			</Vstack>
		</Section>
	);
};

export default Contactsection;
