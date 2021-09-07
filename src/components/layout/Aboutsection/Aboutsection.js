import Baselink from "../../common/actions/links/Baselink/Baselink";
import Box from "../../common/blocks/Box/Box";
import Divider from "../../common/blocks/Divider/Divider";
import Vstack from "../../common/blocks/Vstack/Vstack";
import Scrollindicator from "../../common/Scrollindicator/Scrollindicator";
import Section from "../../common/Section/Section";
import Text from "../../common/typography/Text/Text";
import styles from "./Aboutsection.module.scss";

const Aboutsection = (props) => {
	return (
		<Section id="about">
			<Vstack className={styles.Aboutsection}>
				<Text as="h1">About Me</Text>
				<Divider />
				<Text>
					Hello! I&apos;m Samy, a <strong>Front-End Developer</strong> specialized in{" "}
					<strong>HTML, Sass, JavaScript (ES6+)</strong> & <strong>React</strong>, currently based in{" "}
					<Baselink
						className={styles.locationlink}
						target="_blank"
						href="https://www.google.com/search?q=saratov&oq=sarato&aqs=chrome.2.69i60j69i57j69i59j35i39j0i512j69i60l2j69i65.2573j0j7&sourceid=chrome&ie=UTF-8"
					>
						Saratov, Russia
					</Baselink>{" "}
					(open to relocation).
				</Text>
				<Text>I speak Russian (fluent), Arabic (fluent) and French (conversational).</Text>
				<Text>
					I enjoy creating demanding projects and excel at finding creative solutions to technical challenges
					while designing sleek and visually appealing web applications by following best-practices and
					industry standards.
				</Text>
				<Text>My free time is mostly spent between my family and self-improvement.</Text>
				<Text>
					I&apos;m a quick learner and I constantly invest in my knowledge by working on{" "}
					<Baselink href="#portfolio">my personal projects</Baselink>, learning new technologies, consuming
					programming literature and taking online courses.
				</Text>
				<Text>Technologies that I&apos;ve recently worked with:</Text>
				<Box as="ul" className={styles.grid}>
					<li>HTML</li>
					<li>Sass</li>
					<li>JavaScript</li>
					<li>React</li>
					<li>React-Redux</li>
					<li>NextJS</li>
					<li>Firebase</li>
					<li>Chakra-ui</li>
				</Box>
				<Scrollindicator />
			</Vstack>
		</Section>
	);
};

export default Aboutsection;
