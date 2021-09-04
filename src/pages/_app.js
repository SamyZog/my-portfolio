import Main from "../components/common/Main/Main";
import Footer from "../components/layout/Footer/Footer";
import Header from "../components/layout/Header/Header";
import Themeprovider from "../context/Themeprovider";
import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
	return (
		<Themeprovider>
			<Header />
			<Main>
				<Component {...pageProps} />
			</Main>
			<Footer />
		</Themeprovider>
	);
}

export default MyApp;
