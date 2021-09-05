import { RiGithubFill, RiLinkedinBoxFill, RiMailFill, RiStackOverflowFill, RiTelegramFill } from "react-icons/ri";
import Baselink from "../actions/links/Baselink/Baselink";
import Center from "../blocks/Center/Center";
import styles from "./Sociallinks.module.scss";

const Sociallinks = (props) => (
	<>
		<Center as="li">
			<Baselink className={styles.Sociallinks} target="_blank" title="Github" href="https://github.com/SamyZog">
				<RiGithubFill />
			</Baselink>
		</Center>
		<Center as="li">
			<Baselink
				className={styles.Sociallinks}
				target="_blank"
				title="LinkedIn"
				href="https://www.linkedin.com/in/samyzogeyb/"
			>
				<RiLinkedinBoxFill />
			</Baselink>
		</Center>
		<Center as="li">
			<Baselink
				className={styles.Sociallinks}
				target="_blank"
				title="Stackoverflow"
				href="https://stackoverflow.com/users/13417861/sam?tab=profile"
			>
				<RiStackOverflowFill />
			</Baselink>
		</Center>
		<Center as="li">
			<Baselink className={styles.Sociallinks} target="_blank" title="Telegram" href="https://t.me/SamZog">
				<RiTelegramFill />
			</Baselink>
		</Center>
		<Center as="li">
			<Baselink className={styles.Sociallinks} target="_blank" title="Email" href="mailto:contact@samyzogeyb.com">
				<RiMailFill />
			</Baselink>
		</Center>
	</>
);

export default Sociallinks;
