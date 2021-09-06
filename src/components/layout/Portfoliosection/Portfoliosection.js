import { useState } from "react";
import useSWR from "swr";
import Box from "../../common/blocks/Box/Box";
import Divider from "../../common/blocks/Divider/Divider";
import Vstack from "../../common/blocks/Vstack/Vstack";
import Projectcard from "../../common/Projectcard/Projectcard";
import Scrollindicator from "../../common/Scrollindicator/Scrollindicator";
import Section from "../../common/Section/Section";
import Spinner from "../../common/Spinner/Spinner";
import Text from "../../common/typography/Text/Text";
import styles from "./Portfoliosection.module.scss";

const Portfoliosection = (props) => {
	const [{ projects }, setProjects] = useState({});

	const { data, error } = useSWR("https://gitconnected.com/v1/portfolio/samyzog", (url) =>
		fetch(url)
			.then((res) => res.json())
			.then((res) => setProjects(res)),
	);

	return (
		<Section id="portfolio" className={styles.Portfoliosection}>
			<Vstack className={styles.content}>
				<Text as="h1">Portoflio</Text>
				<Divider />
				{!projects && <Spinner />}
				<Box as="ul" className={styles.grid}>
					{projects &&
						projects.map(
							({
								description,
								displayName,
								githubUrl,
								repositoryUrl,
								images,
								libraries,
								website,
								name,
							}) => {
								return (
									<li key={githubUrl}>
										<Projectcard
											name={name}
											description={description}
											displayName={displayName}
											githubUrl={githubUrl}
											repositoryUrl={repositoryUrl}
											images={images}
											libraries={libraries}
											website={website}
										/>
									</li>
								);
							},
						)}
				</Box>
			</Vstack>
			<Scrollindicator />
		</Section>
	);
};

export default Portfoliosection;
