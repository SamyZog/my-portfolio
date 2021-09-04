import Vstack from "../blocks/Vstack/Vstack";
import styles from "./Main.module.scss";

const Main = ({ children }) => (
	<Vstack as="main" className={styles.Main}>
		{children}
	</Vstack>
);

export default Main;
