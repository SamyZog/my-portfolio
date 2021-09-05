/* eslint-disable @next/next/no-img-element */
import { RiExternalLinkFill, RiGithubFill } from "react-icons/ri";
import Imagepreview from "../../Imagepreview/Imagepreview";
import Baselink from "../actions/links/Baselink/Baselink";
import Divider from "../blocks/Divider/Divider";
import Hstack from "../blocks/Hstack/Hstack";
import Vstack from "../blocks/Vstack/Vstack";
import Text from "../typography/Text/Text";
import styles from "./Projectcard.module.scss";

const Projectcard = ({ description, displayName, githubUrl, repositoryUrl, images, libraries, website, name }) => {
	const imageUrls = images.map(
		({
			resolutions: {
				mobile: { url },
			},
		}) => {
			return url;
		},
	);

	return (
		<Vstack className={styles.Projectcard}>
			<Hstack className={styles.heading}>
				<Baselink target="_blank" href={website} title="Demo">
					<RiExternalLinkFill />
				</Baselink>
				<Baselink target="_blank" href={githubUrl} title="Github">
					<RiGithubFill />
				</Baselink>
			</Hstack>
			<Text as="h2">{displayName}</Text>
			<Divider />
			<Imagepreview name={name} />
			<Text className={styles.description}>{description}</Text>
			<Hstack className={styles.techstack}>
				{libraries.map((library) => {
					return <Text key={library}>{library}</Text>;
				})}
			</Hstack>
		</Vstack>
	);
};

export default Projectcard;
