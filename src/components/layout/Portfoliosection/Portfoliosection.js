import { useEffect, useState } from "react";
import useSWR from "swr";
import Box from "../../common/blocks/Box/Box";
import Section from "../../common/Section/Section";
import styles from "./Portfoliosection.module.scss";

const Portfoliosection = (props) => {
	const [projects, setProjects] = useState([]);

	const { data, error } = useSWR("https://gitconnected.com/v1/portfolio/samyzog", (url) =>
		fetch(url).then((res) => res.json().then((res) => setProjects(res))),
	);

	useEffect(() => {
		console.log(projects);
	});

	return (
		<Section id="portfolio">
			<Box className={styles.Portfoliosection}></Box>
		</Section>
	);
};

export default Portfoliosection;
