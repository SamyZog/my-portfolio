import { joinClasses } from "../../../../utils/joinClasses";
import styles from "./Divider.module.scss";

const Divider = ({ className, ...props }) => {
	const css = joinClasses(styles.Divider, className);
	return <hr className={css} />;
};

export default Divider;
