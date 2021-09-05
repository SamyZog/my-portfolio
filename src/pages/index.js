import Head from "next/head";
import Homeroute from "../routes/Homeroute";

export default function Home() {
	return (
		<>
			<Head>
				<title>Samy Zogeyb | Front-End Web Developer</title>
				<meta property="og:title" content="Samy Zogeyb | Front-End Web Developer" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://www.samyzogeyb.com" />
				<meta property="og:image" content="/og-image.png" />
				<meta property="og:description" content="Samy Zogeyb's Front-End Web Developer Portfolio" />
				<link rel="canonical" href="https://www.samyzogeyb.com" />
				<meta name="description" content="Samy Zogeyb's Front-End Web Developer Portfolio"></meta>
			</Head>
			<Homeroute />
		</>
	);
}
